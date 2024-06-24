const express = require('express')
const route = express.Router()
const routeUser = require('./user')
const routeActivity = require('./activity')
const authentication = require('../middleware/authentication')
const ControllerProject = require('../controller/ControllerProject')

route.use('/user', routeUser)
route.use('/activities', authentication, routeActivity)
route.get('/projects', authentication, ControllerProject.getProject)

module.exports = route