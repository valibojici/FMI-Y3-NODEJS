'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grades', {
      grade: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      courseId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'Courses',
          },
          key: 'id'
        },
      },
      studentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'Students',
          },
          key: 'id'
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grades');
  }
};