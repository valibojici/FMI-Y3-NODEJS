'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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

    await queryInterface.addColumn(
      'Courses',
      'professorId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Professors',
          },
          key: 'id'
        },
      }
    );

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};