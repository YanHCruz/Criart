from flask import Flask, jsonify, request
from flask_cors import CORS
import pyodbc
import re
import bcrypt
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests

# Criação do servidor
app = Flask(__name__)
CORS(app) # Liberação do CORS (para o React ler)

# Conexão com o Banco de Dados 
STRING_CONEXAO = "Driver={SQL Server};Server=DESKTOP-V8GUBC5;Database=master;Trusted_Connection=yes;"

GOOGLE_CLIENT_ID = '483632354650-ek3suo4ipmj3brqnlqlqlmsof529hgif.apps.googleusercontent.com'

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
    senha_texto_puro = dados.get('senha')

    # Limpa a máscara (tirando pontos e traços)
    cpf_limpo = re.sub(r'\D', '', cpf_recebido)

    # Faz a validação matemática
    if not is_cpf_valido(cpf_limpo):
        return jsonify({"valido": False, "mensagem": "CPF inválido."}), 400
    
    # Hash da senha utilizando bcrypt
    senha_bytes = senha_texto_puro.encode('utf-8')
    
    # Gerar um salt e cria o hash de senha
    salt = bcrypt.gensalt()
    hash_senha = bcrypt.hashpw(senha_bytes, salt)

    # Transforma o hash em senha final para armazenar no banco
    senha_final_banco = hash_senha.decode('utf-8')
    
    # Caso o CPF seja válido, fará um INSERT no banco
    try:
        conexao = pyodbc.connect(STRING_CONEXAO)
        cursor = conexao.cursor()

        # Aqui será feito o INSERT
        comando_sql = """INSERT INTO Usuarios (nome, cpf, email, senha) VALUES (?, ?, ?, ?)"""

        # Executa o comando trocando as interrogações pelas variáveis 
        cursor.execute(comando_sql, (nome, cpf_limpo, email, senha_final_banco))
            
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

@app.route('/api/login-google', methods=['POST'])
def login_google():
    dados = request.get_json()
    token_recebido = dados.get('token') # Pega o token enviado via React
    
    if not token_recebido:
        return jsonify({"Valido": False, "Mensagem": "Token não fornecido."}), 400
    
    try:
        # Recebe o toke do cliente e valida com a Google
        id_info = id_token.verify_oauth2_token(
            token_recebido,
            google_requests.Request(),
            GOOGLE_CLIENT_ID
        )
        # Se o token for válido, o (i_info) conterá as infos do usuário
        email = id_info.get('email')
        nome = id_info.get('nome')
        
        return jsonify({"Valido": True, "Mensagem": f"Bem-vindo(A), {nome}!"}), 200
    
    except ValueError:
        return jsonify({"Valido": False, "Mensagem": "Token inválido."}), 401

    except Exception as e:
        return jsonify({"Valido": False, "Mensagem": "Ocorreu um erro ao processar o login."}), 500

# Rodando o server na porta 5000
if __name__ == '__main__':
    app.run(debug=True, port=5000)