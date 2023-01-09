const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
  } = require("graphql");
  const courseType = require("../../types/courseType");
  const createCourseResolver = require('../../resolvers/course/createCourseResolver');

  module.exports = {
    type: courseType,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
        professorId: {
          type: new GraphQLNonNull(GraphQLInt),
      },
    },
    resolve: createCourseResolver,
  }
