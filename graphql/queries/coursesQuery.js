const { GraphQLList } = require("graphql");
const courseType = require("../types/courseType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(courseType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.Course.findAll();
  }
}
