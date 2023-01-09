'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Grade.hasOne(models.Student);
      models.Grade.hasOne(models.Course);
    }
  }
  Grade.init({
    grade: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Grade',
  });
  return Grade;
};