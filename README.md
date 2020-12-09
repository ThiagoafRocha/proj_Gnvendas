# proj-Gnvendas
Projeto proposto como desafio para vaga na empresa Gerencianet

# Instruções

Este é um projeto construído no padrão MVC e que utiliza as tecnologias Node.js, JavaScript e MySql. Para seu funcionamento, é necessário que haja um banco de dados com duas tabelas: Produtos (id, nome, valor) e Compras (id, pdf_charge, charge_id). Além disso, é necessário a configuração de conexão à esse banco através do arquivo dbConnection.js, localizado na pasta database.

Para iniciar o projeto, é necessário inicializar o Node.js:
    *npm init*

Além disso, se faz necessário a instalação de alguns pacotes Node.js:
- Express.js
    *npm install express --save*

-body-parser
    *npm install body-parser --save*

-mysql
    *npm install mysql --save*

-nodemon
    *npm install --save-dev nodemon*

-API Gerencianet
    *npm install gn-api-sdk-node --save*

Para sua execução, basta inicializar o servidor através do nodemon
    *nodemon server*
e em um navegador acessar o servidor local na porta 5000 (http://localhost:5000);