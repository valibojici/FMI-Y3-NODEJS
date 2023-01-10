'use strict';
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subjects = [
      'Math', 'English', 'Computer science', 'Chemistry', 'Biology'
    ];
    const professors = await models.Professor.findAll();

    let mockCourses = [];
    for (let i = 0; i < professors.length; ++i) {
      mockCourses.push({
        name: subjects[i],
        professorId: professors[i].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Courses', mockCourses, {});

    // const courses = await models.Course.findAll();

    // const students = await models.Student.findAll();

    // for (let i = 0; i < students.length; i++) {
    //   const groupId = groups[Math.floor(Math.random() * groups.length)].id;
    //   const courseId =
    //     await queryInterface.bulkUpdate('Students', {
    //       groupId: groupId,
    //     }, {
    //       id: students[i].id,
    //     });
    // }
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
