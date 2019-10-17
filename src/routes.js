const express = require('express')
//const User = require('./app/models/User')

const routes = express.Router()



//Nossos controllers
const UserController = require('./App/controllers/UserController')



//GET
//POST
//PUT
//DELETE

routes.post('/users', async (req, res) => {
    const user = await User.create(req.body) 
    return res.json(user)
    //REQ 
    //RES  
})

//Criamos uma rota para json
routes.get('/users', (req, res) => {
    return res.json({
        usuario: 'Felipe',
        idade: 22,
        amigos: ['Juliano', 'Fernando', 'Caio', 'Anderson', 'Kaique'],

        ativo: false

    }

    )
})


routes.get('/', (req, res) => {
    return res.send('~ ~ ~ ~ ~ ~ BEM VINDO ~ ~ ~ ~ ~ ~')
})


routes.get('/users/:name', (req, res) => {
    const name = req.params.name
    return res.send(name)
})

module.exports = routes