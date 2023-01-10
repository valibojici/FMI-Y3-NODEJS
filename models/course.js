'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Course.belongsTo(models.Professor);

      models.Course.belongsToMany(models.Student, {
        through: models.CourseStudent,
        foreignKey: 'courseId'
      });

      models.Course.belongsToMany(models.Student, {
        through: models.Grade,
        foreignKey: 'courseId'
      });
    }
  }
  Course.init({
    name: DataTypes.STRING,
    professorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};