const {GraphQLNonNull, GraphQLID} = require("graphql");
const courseType = require("../types/courseType");
const models = require("../../models");

module.exports = {
  type: courseType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }

    const courseData = await models.Course.findByPk(id);

    return courseData;
  }
}
