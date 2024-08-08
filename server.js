import app from "./NodeApi/src/app.js"

import conexao from "./infra/conexao.js"

const PORT = 3000

//Fazer a conexão

conexao.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log("conectado com sucesso!")
    }

    app.listen(PORT,()=>{console.log(`Servidor rodando no endereço http://localhost:${PORT}`)})
})

//Escutar a porta 3000

//coloque dentro do package.json o seguinte código "type":"module" é obrigátorio para usar o import e export

