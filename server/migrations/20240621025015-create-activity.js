'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tittle: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
      },
      ProjectId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "Projects"
        }, onUpdate: "cascade", onDelete: "cascade"
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "Users"
        }, onUpdate: "cascade", onDelete: "cascade"
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
        notEmpty: true
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
        notEmpty: true
      },
      startTime: {
        type: Sequelize.TIME,
        allowNull: false,
        notEmpty: true
      },
      endTime: {
        type: Sequelize.TIME,
        allowNull: false,
        notEmpty: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Activities');
  }
};