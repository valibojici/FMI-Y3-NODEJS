'use strict';
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const students = await models.Student.findAll();
    let mockCourseStudents = [];
    let mockGrades = [];
    let currentCourse = 1;
    for (let i = 0; i < students.length; ++i) {
      if (i % 5 == 0) {
        currentCourse++;
      }
      mockCourseStudents.push({
        courseId: currentCourse,
        studentId: students[i].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      if (Math.random() < 0.5) {
        mockGrades.push({
          grade: Math.max(1, Math.floor(Math.random() * 10)),
          courseId: currentCourse,
          studentId: students[i].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    try {
      await queryInterface.bulkInsert('CourseStudents', mockCourseStudents, {});
    } catch (e) {
      console.log("course students error");
      console.log(e);
    }
    try {
      await queryInterface.bulkInsert('Grades', mockGrades, {});

    } catch (e) {
      console.log("grades error");
      console.log(e);
    }
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
