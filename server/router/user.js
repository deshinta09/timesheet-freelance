const express = require('express')
const ControllerUser = require('../controller/ControllerUser')
const route = express.Router()

route.post('/register', ControllerUser.register)
route.post('/login', ControllerUser.login)

module.exports = route