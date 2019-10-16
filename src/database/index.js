//Carregar Models
const Sequelize = require('sequelize')
const databaseConfig = require('../config/database')

//Model
const User = require('../app/models/User')

class Database{
    constructor(){
        this.init()
    }

    init(){
        this.conectiion = new Sequelize(databaseConfig)
        User.init(this.conectiion)
    }
}

module.exports = new Database()