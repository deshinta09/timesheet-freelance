'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Activity, { foreignKey: "UserId" })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: { msg: "Username is require" },
        notNull: { msg: "Username is require" }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: { args: true, msg: "Email must be unique"},
      allowNull:false,
      validate: {
        notEmpty: { msg: "Email is require" },
        notNull: { msg: "Email is require" },
        isEmail: { msg: "Email must be type email" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: { msg: "Password is require" },
        notNull: { msg: "Password is require" }
      }
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: { msg: "Rate is require" },
        notNull: { msg: "Rate is require" }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    const hashedPassword = hashPassword(user.password);
    user.password = hashedPassword;
  });
  return User;
};