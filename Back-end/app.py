from flask import Flask, jsonify, request
from flask_cors import CORS
import pyodbc
import re

# Criação do servidor
app = Flask(__name__)
CORS(app) # Liberação do CORS (para o React ler)

# Conexão com o Banco de Dados 
STRING_CONEXAO = "Driver={SQL Server};Server=DESKTOP-V8GUBC5;Database=master;Trusted_Connection=yes;"

# Função para matemática do CPF
def is_cpf_valido (cpf):
    if len(cpf) != 11 or cpf == cpf[0] * 11:
        return False
    
    # Calculo do primeiro digito verificador
    soma = sum(int(cpf[i]) * (10 - i) for i in range(9))
    digito1 = (soma * 10 % 11) % 10
    if digito1 != int(cpf[9]):
        return False
    
    # Calculo do segundo digito verificador
    soma = sum(int(cpf[i]) * (11 - i) for i in range(10))
    digito2 = (soma * 10 % 11) % 10
    if digito2 != int(cpf[10]):
        return False
    
    return True 

    #  Rota para validação do CPF

@app.route('/api/validar-cpf', methods =['POST']) # POST é utilizado pois está sendo enviado dados ocultos
def validar_cpf():
    # Recebe os dados em formato JSON vindo do react
    dados = request.get_json()
    nome = dados.get('nome')
    cpf_recebido = dados.get('cpf')
    email = dados.get('email')
    senha = dados.get('senha')

    # Limpa a máscara (tirando pontos e traços)
    cpf_limpo = re.sub(r'\D', '', cpf_recebido)

    # Faz a validação matemática
    if not is_cpf_valido(cpf_limpo):
        return jsonify({"valido": False, "mensagem": "CPF inválido."}), 400
    
    # Caso o CPF seja válido, fará um INSERT no banco
    try:
        conexao = pyodbc.connect(STRING_CONEXAO)
        cursor = conexao.cursor()

        # Aqui será feito o INSERT
        comando_sql = """INSERT INTO Usuarios (nome, cpf, email, senha) VALUES (?, ?, ?, ?)"""

        # Executa o comando trocando as interrogações pelas variáveis 
        cursor.execute(comando_sql, (nome, cpf_limpo, email, senha))
            
        # Confirma a gravação no Banco de dados
        conexao.commit()
        cursor.close()
        conexao.close()
        
        return jsonify({"Valido": True, "Mensagem": "CPF validado e usuário cadastrado com sucesso!"})

    except pyodbc.IntegrityError:
        return jsonify({"Valido": False, "Mensagem": "CPF ou e-mail já cadastrado no sistema."}), 400    

    except Exception as e:
        print(f"Erro no banco: {e}")
        return jsonify({"Valido": False, "Mensagem": "Ocorreu um erro ao cadastrar o usuário."}), 500

# Criação da API depoimentos
@app.route('/api/depoimentos', methods=['GET'])
def listar_depoimentos():

    # Abre a conexão
    conexao = pyodbc.connect(STRING_CONEXAO)
    cursor = conexao.cursor()

    # Executa a query
    cursor.execute("SELECT id, nome, papel, texto FROM Depoimentos WHERE status = 1")

    # Retornará o resultado do banco em lista (teste)
    colunas = [coluna[0] for coluna in cursor.description]
    depoimentos_do_banco = [dict(zip(colunas, linha)) for linha in cursor.fetchall()]

    # Devolução para o react
    return jsonify(depoimentos_do_banco)

# Rodando o server na porta 5000
if __name__ == '__main__':
    app.run(debug=True, port=5000)