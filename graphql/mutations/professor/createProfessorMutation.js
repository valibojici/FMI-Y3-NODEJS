const {
    GraphQLNonNull,
    GraphQLString
  } = require("graphql");
  const professorType = require("../../types/professorType");
  const createProfessorResolver = require('../../resolvers/professor/createProfessorResolver');

  module.exports = {
    type: professorType,
    args: {
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: createProfessorResolver,
  }
