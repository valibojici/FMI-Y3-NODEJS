const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const studentType = require("./studentType");

const groupType = new GraphQLObjectType({
  name: 'Group',
  fields: {
    id: {
      type: GraphQLID,
    },
    year: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    students: {
      type: new GraphQLList(studentType),
      resolve: async (group) => {
        console.log(group);
        return group.getStudents();
      }
    }
  }
});

module.exports = groupType;
