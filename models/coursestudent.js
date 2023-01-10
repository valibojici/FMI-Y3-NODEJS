'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.CourseStudent.belongsTo(models.Student, { foreignKey: 'studentId' });
      models.CourseStudent.belongsTo(models.Course, { foreignKey: 'courseId' });
    }
  }
  CourseStudent.init({
    courseId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseStudent',
  });
  return CourseStudent;
};