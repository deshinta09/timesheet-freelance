const { comparePassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { User } = require('../models/')

class ControllerUser {
    static async register (req,res,next){
        try {
            let { username, email, password, rate } = req.body
            let newUser = await User.create({ username, email, password, rate })
            res.status(201).json({
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                rate: newUser.rate
            })
        } catch (error) {
            next(error)
        }
    }

    static async login (req,res,next){
        try {
            let { email, password } = req.body
            let user = await User.findOne({ where: { email }})
            if(!user){
                throw { name: "Bad Request", message: "Invalid email/password" }
            }
            
            let checkPassword = comparePassword(password,user.password)
            if(!checkPassword){
                throw { name: "Bad Request", message: "Invalid email/password" }
            }

            let access_token = createToken({ id: user.id })
            res.status(200).json({ access_token })
        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = ControllerUser