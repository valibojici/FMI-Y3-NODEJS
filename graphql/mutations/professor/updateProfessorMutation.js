const {
    GraphQLNonNull,
    GraphQLString, GraphQLID
  } = require("graphql");
  const professorType = require("../../types/professorType");
  const updateProfessorResolver = require('../../resolvers/professor/updateProfessorResolver');

  module.exports = {
    type: professorType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      firstName: {
        type: GraphQLString,
      },
      lastName: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      }
    },
    resolve: updateProfessorResolver,
  }
