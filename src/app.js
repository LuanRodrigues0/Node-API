import express from "express"
import routes from './routes.js'


const app = express()

//Indicar para o express ler o body com json
app.use(express.json())


//Usar o router 
app.use(routes)


export default app




//npm init -y
//npm install express --save

//npm run dev 
//instalar nodemon: npm install nodemon -D
//faz o servidor trabalhar de forma ativa sem precisar ficar resetando manualmente
