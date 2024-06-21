const express = require('express')
const route = express.Router()
const routeUser = require('./user')
const routeActivity = require('./activity')
const authentication = require('../middleware/authentication')

route.use('/user', routeUser)
route.use('/activity', authentication, routeActivity)

module.exports = route