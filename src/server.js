import app from "./app.js"



const PORT = 3000


//Escutar a porta 3000
app.listen(PORT,()=>{console.log(`Servidor rodando no endereço http://localhost:${PORT}`)})

//coloque dentro do package.json o seguinte código "type":"module" é obrigátorio para usar o import e export

