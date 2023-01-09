const {GraphQLNonNull, GraphQLID} = require("graphql");
const professorType = require("../types/professorType");
const models = require("../../models");

module.exports = {
  type: professorType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }

    const professorData = await models.Professor.findByPk(id);

    return professorData;
  }
}
