const {
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID
  } = require("graphql");

  const deleteProfessorResolver = require('../resolvers/deleteProfessorResolver');

  module.exports = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteProfessorResolver,
  };
