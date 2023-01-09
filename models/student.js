'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Student.belongsToMany(models.Course, {
        through: models.Grade
      });

      models.Course.belongsToMany(models.Student, { through: 'StudentCourses' });

      models.Course.sync();
      models.Student.sync();
    }
  }
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};