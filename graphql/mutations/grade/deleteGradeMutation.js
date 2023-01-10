const {
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID
  } = require("graphql");

  const deleteGradeResolver = require('../../resolvers/grade/deleteGradeResolver');

  module.exports = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteGradeResolver,
  };
