module.exports = async(req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.json({error:"Token não Informado"})
    }
    //console.log( authHeader )

    return next()
}