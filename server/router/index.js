const express = require('express')
const route = express.Router()
const routeUser = require('./user')
const routeActivity = require('./activity')

route.use('/user', routeUser)
route.use('/activity', routeActivity)

module.exports = route