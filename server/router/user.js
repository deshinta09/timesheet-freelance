const express = require('express')
const ControllerUser = require('../controller/ControllerUser')
const authentication = require('../middleware/authentication')
const route = express.Router()

route.post('/register', ControllerUser.register)
route.post('/login', ControllerUser.login)
route.get('', authentication, ControllerUser.profileUser)

module.exports = route