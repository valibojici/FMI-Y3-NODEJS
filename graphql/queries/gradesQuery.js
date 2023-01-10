const { GraphQLList } = require("graphql");
const gradeType = require("../types/gradeType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(gradeType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.Grade.findAll();
  }
}
