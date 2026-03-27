from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc

# Criação do servidor
app = Flask(__name__)
CORS(app) # Liberação do CORS (para o React ler)

# Conexão com o Banco de Dados 
STRING_CONEXAO = "Driver={SQL Server};Server=DESKTOP-V8GUBC5;Database=master;Trusted_Connection=yes;"

# Criação da API
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