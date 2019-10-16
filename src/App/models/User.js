const Sequelize = require('sequelize')
const { Model } = require('Sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            category: Sequelize.STRING,
            description: Sequelize.STRING,
            telephone: Sequelize.STRING,
            photo: Sequelize.STRING,
        },
            {
                sequelize
            }
        )
    }
}


module.exports = User