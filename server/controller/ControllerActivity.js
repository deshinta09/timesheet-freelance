const formatTime = require("../helpers/duration")
const { Activity, Project } = require("../models/")

class ControllerActivity {
    static async allActivity (req,res,next){
        try {
            let activities = await Activity.findAll({
                where: {
                    UserId: req.user.id
                },
                include: {
                    model: Project
                }
            })
            res.status(200).json(activities)
        } catch (error) {
            next(error)
        }
    }

    static async addActivity (req,res,next){
        try {
            let { tittle, ProjectId, startDate, endDate, startTime, endTime } = req.body

            let newActivity = await Activity.create({ tittle, ProjectId: Number(ProjectId), UserId: req.user.id, startDate, endDate, startTime, endTime, duration: formatTime(startTime,endTime) })

            res.status(200).json(newActivity)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerActivity