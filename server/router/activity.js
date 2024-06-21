const express = require('express')
const ControllerActivity = require('../controller/ControllerActivity')
const route = express.Router()

route.get('', ControllerActivity.allActivity)
route.post('', ControllerActivity.addActivity)
route.get('/:id', ControllerActivity.getById)
route.put('/:id', ControllerActivity.editActivity)
route.delete('/:id', ControllerActivity.deleteActivity)

module.exports = route