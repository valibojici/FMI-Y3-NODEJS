'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class StudentCourses extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Student.belongsToMany(models.Course, { through: models.StudentCourses });
            models.Course.belongsToMany(models.Student, { through: models.StudentCourses });
        }
    }
    StudentCourses.init({
        StudentCourses: DataTypes.NUMBER
    }, {
        sequelize,
        modelName: 'StudentCourses',
    });
    return StudentCourses;
};