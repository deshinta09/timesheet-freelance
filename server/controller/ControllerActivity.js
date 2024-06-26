const { Op, where } = require("sequelize")
const formatTime = require("../helpers/duration")
const { Activity, Project, User } = require("../models/")

class ControllerActivity {
    static async allActivity (req,res,next){
        try {
            let { search, filter } = req.query
            let option = {
                where: {
                    UserId: req.user.id
                },
                include: [
                    {
                        model: Project,
                        attributes:['name']
                    },
                    {
                        model: User,
                        attributes:['username', 'rate']
                    }
                ]
            }
            filter ? option.where.ProjectId = { [Op.eq] : filter } : ''
            search ? option.where.tittle = { [Op.iLike]: `%${search}%` } : ''
            let activities = await Activity.findAll(option)
            res.status(200).json(activities)
        } catch (error) {
            next(error)
        }
    }

    static async addActivity (req,res,next){
        try {
            let { tittle, ProjectId, startDate, endDate, startTime, endTime } = req.body
            // console.log(req.body,formatTime(startTime,endTime).duration,'<<< data controller');

            let newActivity = await Activity.create({ tittle, ProjectId: Number(ProjectId), UserId: req.user.id, startDate, endDate, startTime, endTime, duration: formatTime(startTime,endTime).duration })

            let lamaWaktu = formatTime(startTime,endTime) // waktu yang ditambah
            let totalJam = Number(lamaWaktu.hours) + Number(req.user.duration[0]) // menjumlahkan jam yang ditambah dan yang sudah ada di database
            let totalMenit = Number(lamaWaktu.minutes) + Number(req.user.duration[1]) // menjumlahkan menit yang ditambah dan yang sudah ada di database
            let totalDurasi = `${totalJam}:${totalMenit}` // total semua waktu dalam format jam
            let income = totalJam * req.user.rate // jumlah income yang didapat

            await User.update(
                {
                    duration:totalDurasi,
                    income
                },
                {
                    where: { id:req.user.id }
                }
            )

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
                    tittle, ProjectId, startDate, endDate, startTime, endTime, duration: formatTime(startTime,endTime).duration
                }, 
                { 
                    where: { id } 
                }
            )

            let waktuAwal = activity.duration.split(':')
            let lamaWaktu = formatTime(startTime,endTime) // waktu yang ditambah
            let totalJam = Number(lamaWaktu.hours) + (Number(req.user.duration[0]) - waktuAwal[0]) // menjumlahkan jam yang ditambah dan yang sudah ada di database
            let totalMenit = Number(lamaWaktu.minutes) + (Number(req.user.duration[1]) - waktuAwal[1]) // menjumlahkan menit yang ditambah dan yang sudah ada di database
            let totalDurasi = `${totalJam}:${totalMenit}` // total semua waktu dalam format jam
            let income = totalJam * req.user.rate // jumlah income yang didapat

            await User.update(
                {
                    duration:totalDurasi,
                    income
                },
                {
                    where: { id:req.user.id }
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

            let waktuAwal = activity.duration.split(':')
            let totalJam = Number(req.user.duration[0]) - waktuAwal[0] // menjumlahkan jam yang ditambah dan yang sudah ada di database
            let totalMenit = Number(req.user.duration[1]) - waktuAwal[1] // menjumlahkan menit yang ditambah dan yang sudah ada di database
            let totalDurasi = `${totalJam}:${totalMenit}` // total semua waktu dalam format jam
            let income = totalJam * req.user.rate // jumlah income yang didapat

            await User.update(
                {
                    duration:totalDurasi,
                    income
                },
                {
                    where: { id:req.user.id }
                }
            )

            res.status(200).json({ message: `Success Delete ${activity.tittle}`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerActivity