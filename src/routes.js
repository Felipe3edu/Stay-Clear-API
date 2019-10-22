const express = require('express')
//const User = require('./app/models/User')

const routes = express.Router()



//Nossos controllers
const UserController = require('./App/controllers/UserController')
const AuthController = require('./App/controllers/AuthController')


//Nossos Middlewares
const AuthMiddleware = require('./App/middlewares/AuthMiddlewares')
//GET
//POST
//PUT
//DELETE

routes.post('/users', UserController.store)
routes.post('/auth' ,AuthController.store)
routes.use(AuthMiddleware)
routes.get('/users', UserController.index)

module.exports = routes