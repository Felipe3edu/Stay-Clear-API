//Carregar Models
const Sequelize = require('sequelize')
const databaseConfig = require('../config/database')

//Model
const User = require('../App/models/User')
const Category = require('../App/models/Category')


class Database{
    constructor(){
        this.init()
    }

    init(){
        this.conectiion = new Sequelize(databaseConfig)
        User.init(this.conectiion)
        //Category.init(this.conectiion)
    }
}

module.exports = new Database()