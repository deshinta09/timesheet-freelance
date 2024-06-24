const { Project } = require("../models/")

class ControllerProject {
    static async getProject (req,res,next){
        try {
            let projects = await Project.findAll()
            res.status(200).json(projects)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerProject