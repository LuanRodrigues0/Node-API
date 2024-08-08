import mysql from 'mysql2'

const conexao = mysql.createConnection({
   host: 'localhost',
   port: '3306',
   user: 'root',
   password: '123456789',
   database: 'bd_copa'

})

export default conexao

//Caso erro "Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; ",  siga os seguintes passos no terminal:

// 1. npm install mysql@latest
// 2. npm install mysql2

//Logo após é só importar  no arquivo aonde está sua conexão o seguinte código: 
// import mysql from 'mysql2';