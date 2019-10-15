const express = require('express')

const routes = express.Router()



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