const {
    GraphQLNonNull,
    GraphQLString, GraphQLID, GraphQLInt
  } = require("graphql");
  const courseType = require("../../types/courseType");
  const updateCourseResolver = require('../../resolvers/course/updateCourseResolver');

  module.exports = {
    type: courseType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      name: {
        type: GraphQLString,
      },
      professorId: {
        type: GraphQLInt,
      }
    },
    resolve: updateCourseResolver,
  }
