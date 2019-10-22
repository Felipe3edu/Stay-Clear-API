    const jwt = require('jsonwebtoken')

    module.exports = async(req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.json({error:"Token não Informado"})
    }
    //console.log( authHeader )
    
    
    //separamos nosso token entre hash e bearer pelo ~~
    const [bearer, token] = authHeader.split(' ')
    
    try {
        //DEscriptografando nosso tokken
        const decoded = jwt.verify(token, '753c5e1b85aa8ed55da70bd2b6b017a9');
        
        //Passando nosso id para a aplicação
        req.userId = decoded.id

        //Retorna os dados 
        return next()

    } catch(err) {
        console.log(err)
      }

  
}