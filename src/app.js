
import express from 'express'
import selecaoController from './app/controllers/selecaoController.js'

const app = express()



//Indicar para o express ler o body com json
app.use(express.json())


//Buscar por id
function buscarSelecaoId(id){
  return selecoes.filter(selecao=> selecao.id ==id)
}

//Localizar posição/index do elemento
function buscarIndexSelecao(id){
  return selecoes.findIndex(selecao=> selecao.id ==id)
}



//ROTAS
app.get('/Selecoes',selecaoController.index)


//Buscar por id
app.get('/selecoes/:id',selecaoController.show)


//Rota para Criar dados usando post
app.post('/selecoes',selecaoController.store)


//Fazer atualizações por id usando put
//Obs: o id pode ser alterado porem, não é recomendável, para garantirmos a integridade.
app.put('/selecoes/:id',selecaoController.updte)


//deletar por id
app.delete('/selecoes/:id',selecaoController.delete)


export default app




//npm init -y
//npm install express --save

//npm run dev 
//instalar nodemon: npm install nodemon -D
//faz o servidor trabalhar de forma ativa sem precisar ficar resetando manualmente
