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

      // models.Course.hasMany(models.Student);

      // models.Course.belongsToMany(models.Student, {
      //   through: models.Grade
      // });

      models.Course.belongsToMany(models.Student, { through: 'StudentCourses' });
    }
  }
  Course.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};