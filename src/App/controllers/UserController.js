const {Op} = require('sequelize')
const User = require('../models/User')


class UserController {
    async index(req,res) {
        
        const user = await User.findAll({where:
        { 
            email :{
                [Op.ne] : 'felipe_edu37@hotmail.com'
            }
        } 
    })
        return res.json(user)
        
    }




    async store(req, res) {
    
            const userExists = await User.findOne({ where: { email: req.body.email } })
            
            if(userExists){
                return res.json({ error: "Usuario ja existe"})
            }
         
            //Senha = 6 
            if(req.body.password.length < 5){
                return res.json({error : "Senha tem que ter mínimo 6 digitos"})
            }

            const user = await User.create(req.body)

            return res.json(user)
        }
}


module.exports = new UserController()