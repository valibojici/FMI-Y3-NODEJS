const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
  } = require("graphql");
  const gradeType = require("../../types/gradeType");
  const updateGradeResolver = require('../../resolvers/grade/updateGradeResolver');

  module.exports = {
    type: gradeType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      grade: {
        type: GraphQLInt,
      },
      studentId: {
        type: GraphQLInt,
        },
      courseId: {
        type: GraphQLInt,
      },
    },
    resolve: updateGradeResolver,
  }
