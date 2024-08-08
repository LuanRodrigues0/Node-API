
import express from 'express'
const app = express()



//Indicar para o express ler o body com json
app.use(express.json())

//mock
const selecoes=[
  {id:1, selecao: 'Brasil', grupo:'G'},
  {id:2, selecao: 'Suiça', grupo:'G'},
  {id:3, selecao: 'Camarões', grupo:'G'},
  {id:4, selecao: 'Sérvia', grupo:'G'},
]

//Buscar por id
function buscarSelecaoId(id){
  return selecoes.filter(selecao=> selecao.id ==id)
}

//Localizar posição/index do elemento
function buscarIndexSelecao(id){
  return selecoes.findIndex(selecao=> selecao.id==id)
}

//Rota raiz
app.get('/',(req,res)=>{
  res.send('Curso de node');
})

app.get('/Selecoes', (request,response)=>{
   response.status(200).send(selecoes)   

})

//Buscar por id
app.get('/selecoes/:id', (req,res)=>{
    res.json(buscarSelecaoId(req.params.id))
})

//Rota para postar dados usando post

app.post('/selecoes',(req,res)=>{
  selecoes.push(req.body)
  res.status(201).send('seleção cadastrada com sucesso')
})

app.delete('/selecoes/:id', (req,res)=>{
  let index= buscarIndexSelecao(req.params.id)
  selecoes.splice(index, 1)
  //.Splice Método usado para remover elemento do array
  res.send(`Seleção com id ${req.params.id} excluida com sucesso!`)
})

export default app



//npm init -y
//npm install express --save

//npm run dev 
//instalar nodemon: npm install nodemon -D
//faz o servidor trabalhar de forma ativa sem precisar ficar resetando manualmente
