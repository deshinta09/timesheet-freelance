const { compareToken } = require("../helpers/jwt")
const { User } = require("../models/")

async function authentication(req,res,next) {
    try {
        let { authorization } = req.headers

        if(!authorization){
            throw { name: "Unauthorized", message: "Login First!"}
        }
        
        let token = compareToken(authorization.split(' ')[1])
        if(!token){
            throw { name: "Unauthorized", message: "Login First!"}
        }

        let userLogin = await User.findByPk(token.id)
        if(!userLogin){
            throw { name: "Unauthorized", message: "User not found. Please login first"}
        }

        req.user = {
            id: userLogin.id,
            username: userLogin.username,
            rate: userLogin.rate,
            income: Number(userLogin.income),
            duration: userLogin.duration.split(':')
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication