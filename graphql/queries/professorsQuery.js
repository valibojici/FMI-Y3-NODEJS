const { GraphQLList } = require("graphql");
const professorType = require("../types/professorType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(professorType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.Professor.findAll();
  }
}
