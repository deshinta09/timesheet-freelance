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

    static async getById(req,res,next){
        try {
            let { id } = req.params
            let activitie = await Activity.findOne({
                where: {
                    UserId: req.user.id,
                    id
                },
                include: {
                    model: Project
                }
            })
            if (!activitie) {
                throw { name: "Not Found", message: "Data not found"}
            }
            res.status(200).json(activitie)
        } catch (error) {
            next(error)
        }
    }

    static async editActivity(req,res,next){
        try {
            let { id } = req.params
            let activity = await Activity.findByPk(id)
            if(!activity){
                throw { name: "Not Found", message: "Data not found"}
            }

            let { tittle, ProjectId, startDate, endDate, startTime, endTime } = req.body

            await Activity.update(
                { 
                    tittle, ProjectId, startDate, endDate, startTime, endTime, duration: formatTime(startTime,endTime) 
                }, 
                { 
                    where: { id } 
                }
            )
            res.status(200).json({ message: `Success Update ${tittle}`})
        } catch (error) {
            next(error)
        }
    }

    static async deleteActivity(req,res,next){
        try {
            let { id } = req.params
            let activity = await Activity.findByPk(id)
            if(!activity){
                throw { name: "Not Found", message: "Data not found"}
            }

            await Activity.destroy({ where: { id } })
            res.status(200).json({ message: `Success Delete ${activity.tittle}`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerActivity