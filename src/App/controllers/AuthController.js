const jwt = require('jsonwebtoken')
const User = require ('../models/User')

class AuthController{
    async store(req, res){
       
        const userExists = await User.findOne({ where: { email: req.body.email } })
        
        // (!) === Operador NOT
        if(!userExists){
            return res.json({error: "Usuário não Cadastrado"})
        }
        //Verificando a Senha
        if (req.body.password !== userExists.password){
            return res.json({error: "Senha Incorreta"})
        }
        return res.json({
            userExists,
            token: jwt.sign({id: userExists.id, }, '753c5e1b85aa8ed55da70bd2b6b017a9', {
            expiresIn:'7d'
        })
    })
}
}

module.exports = new AuthController