//importação Express
const express = require('express')
const routes = require('./routes')
require('./database')

//Função Express (Definimos a Constante)
const app = express()

//Express lidar com json
app.use(express.json())
app.use(routes)

app.listen(3000)

//Métodos
//get = pegar
//put = atualizar 
//post = postar
//delete = deletar