const {GraphQLNonNull, GraphQLID} = require("graphql");
const gradeType = require("../types/gradeType");
const models = require("../../models");

module.exports = {
  type: gradeType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }

    const gradeData = await models.Grade.findByPk(id);

    return gradeData;
  }
}
