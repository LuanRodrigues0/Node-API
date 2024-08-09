
import express from 'express'
import conexao from '../../infra/conexao.js'

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

//Rota para Criar dados usando post
app.post('/selecoes',(req,res)=>{
  // selecoes.push(req.body)
  // res.status(201).send('seleção cadastrada com sucesso')
  const selecao=req.body
  const sql= "INSERT INTO selecoes SET ? "
  conexao.query(sql,selecao, (erro,result)=>{
      if(erro){
        res.status(400).json({'erro': erro})
      }else{
        res.status(201).json(result)
     }
  })  
})

  //ROTAS
app.get('/Selecoes', (request,res)=>{
     //response.status(200).send(selecoes) 
    const sql= "SELECT * FROM selecoes;"
    conexao.query(sql,(erro,result)=>{
      if(erro){
         res.status(404).json({'erro': erro})
       }else{
         res.status(200).json(result)
      }
   })  

})

//Buscar por id
app.get('/selecoes/:id', (req,res)=>{
  //res.json(buscarSelecaoId(req.params.id))
  const id=req.params.id
  const sql= "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql,id, (erro,result)=>{
    const linha = result[0]
     if(erro){
       res.status(404).json({'erro': erro})
      }else{
       res.status(200).json(linha)
      }
   })  
})

//Fazer atualizações por id usando put
//Obs: o id pode ser alterado porem, não é recomendável, para garantirmos a integridade.
app.put('/selecoes/:id', (req,res)=>{
  // let index= buscarIndexSelecao(req.params.id)
  // selecoes[index].selecao = req.body.selecao 
  // selecoes[index].grupo   = req.body.grupo 
  // res.json(selecoes)
  const id = req.params.id
  const selecao = req.body
  const sql = "UPDATE selecoes SET ? WHERE id=?; "
  conexao.query(sql,[selecao, id], (erro,result)=>{
      if(erro){
        res.status(400).json({'erro': erro})
      } else {
        res.status(200).json(result)
      }
  })  

 
})


//deletar por id
app.delete('/selecoes/:id', (req,res)=>{
  //let index= buscarIndexSelecao(req.params.id)
  //selecoes.splice(index, 1)
  //.Splice Método usado para remover elemento do array
  //res.send(`Seleção com id ${req.params.id} excluida com sucesso!`)

  const id=req.params.id
  const sql= "DELETE FROM selecoes WHERE id=?;"
  conexao.query(sql,id, (erro,result)=>{
    if(erro){
      res.status(400).json({'erro': erro})
      }else{  
      res.status(201).json(result)
       
    }
   })  
})



export default app



//npm init -y
//npm install express --save

//npm run dev 
//instalar nodemon: npm install nodemon -D
//faz o servidor trabalhar de forma ativa sem precisar ficar resetando manualmente
