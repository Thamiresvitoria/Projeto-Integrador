from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Rota principal
@app.route('/')
def home():
    return 'API está no ar!'

# Rota de login
@app.route('/login', methods=['POST'])
def login():
    dados = request.get_json()

    email = dados.get('email')
    senha = dados.get('senha')

    with open('usuarios.json', 'r') as file:
        usuarios = json.load(file)

    for usuario in usuarios:
        if usuario['email'] == email and usuario['senha'] == senha:
            return jsonify({'mensagem': 'Login bem-sucedido'}), 200

    return jsonify({'erro': 'Email ou senha inválidos'}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
