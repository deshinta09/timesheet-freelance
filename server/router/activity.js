const express = require('express')
const ControllerActivity = require('../controller/ControllerActivity')
const route = express.Router()

route.get('', ControllerActivity.allActivity)

module.exports = route