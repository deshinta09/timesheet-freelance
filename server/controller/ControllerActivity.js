const { Activity } = require("../models/")

class ControllerActivity {
    static async allActivity (req,res,next){
        try {
            let activities = await Activity.findAll({
                where: {
                    UserId: req.user.id
                }
            })
            res.status(200).json(activities)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerActivity