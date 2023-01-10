const {
    GraphQLNonNull,
    GraphQLInt,
  } = require("graphql");
  const gradeType = require("../../types/gradeType");
  const createGradeResolver = require('../../resolvers/grade/createGradeResolver');

  module.exports = {
    type: gradeType,
    args: {
      grade: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      studentId: {
          type: new GraphQLNonNull(GraphQLInt),
      },
      courseId: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    },
    resolve: createGradeResolver,
  }
