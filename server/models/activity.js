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
      allowNull:false,
      validate: {
        notEmpty: { msg: "Tittle is require" },
        notNull: { msg: "Tittle is require" }
      }
    },
    ProjectId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    startDate: {
      type: DataTypes.DATE,
      allowNull:false,
      validate: {
        notEmpty: { msg: "Start Date is require" },
        notNull: { msg: "Start Date is require" }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull:false,
      validate: {
        notEmpty: { msg: "End Date is require" },
        notNull: { msg: "End Date is require" }
      }
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull:false,
      validate: {
        notEmpty: { msg: "End Time is require" },
        notNull: { msg: "End Time is require" }
      }
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull:false,
      validate: {
        notEmpty: { msg: "End Time is require" },
        notNull: { msg: "End Time is require" }
      }
    },
    duration: {
      type: DataTypes.TIME,
      allowNull:false,
      validate: {
        notEmpty: { msg: "Duration is require" },
        notNull: { msg: "Duration is require" }
      }
    }
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};