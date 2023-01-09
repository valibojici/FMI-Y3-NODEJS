const { GraphQLList } = require("graphql");
const studentType = require("../types/studentType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(studentType),
  resolve: (_, args, context) => {
    console.log(context.tokenPayload);
    return models.Student.findAll();
  }
}
