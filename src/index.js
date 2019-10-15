//importação Express
const express = require('express')
const routes = require('./routes')

//Função Express (Definimos a Constante)
const app = express()
app.use(routes)

app.listen(3000)

//Métodos
//get = pegar
//put = atualizar 
//post = postar
//delete = deletar