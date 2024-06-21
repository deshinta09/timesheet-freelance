'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Projects', [
    { 
      name: "Desain UI", 
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    { 
      name: "Aplikasi Web", 
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    { 
      name: "Asisten Virtual", 
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    { 
      name: "Desain Logo", 
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
    { 
      name: "Aplikasi Timesheet", 
      createdAt: new Date(), 
      updatedAt: new Date() 
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Projects", null, {})
  }
};
