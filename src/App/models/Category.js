const Sequelize = require('sequelize')
const { Model } = require('Sequelize')

class Category extends Model {
    static init(sequelize) {
        super.init({
            profession: Sequelize.STRING,
            description: Sequelize.STRING,
           
            
           
        },
            {
                sequelize
            }
        )
    }
}


module.exports = Category