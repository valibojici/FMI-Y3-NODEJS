const {
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID
} = require("graphql");

const deleteStudentResolver = require('../../resolvers/student/deleteStudentResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteStudentResolver,
};
