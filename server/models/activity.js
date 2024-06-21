'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsTo(models.User, { foreignKey: "UserId"})
      Activity.belongsTo(models.Project, { foreignKey: "ProjectId"})
    }
  }
  Activity.init({
    tittle: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Tittle is require" },
        notNull: { msg: "Tittle is require" }
      }
    },
    ProjectId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    startDate: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: { msg: "Start Date is require" },
        notNull: { msg: "Start Date is require" }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: { msg: "End Date is require" },
        notNull: { msg: "End Date is require" }
      }
    },
    startTime: {
      type: DataTypes.TIME,
      validate: {
        notEmpty: { msg: "End Time is require" },
        notNull: { msg: "End Time is require" }
      }
    },
    endTime: {
      type: DataTypes.TIME,
      validate: {
        notEmpty: { msg: "End Time is require" },
        notNull: { msg: "End Time is require" }
      }
    }
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};