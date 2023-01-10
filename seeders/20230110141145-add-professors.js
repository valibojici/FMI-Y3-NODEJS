'use strict';
const {
  randFirstName,
  randLastName,
  randEmail
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const mockProfessors = [];

    for (let i = 0; i < 5; i++) {
      mockProfessors.push({
        firstName: randFirstName(),
        lastName: randLastName(),
        email: randEmail(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Professors', mockProfessors, {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
