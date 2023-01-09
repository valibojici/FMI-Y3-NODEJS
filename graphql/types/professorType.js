const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = require('graphql');


const professorType = new GraphQLObjectType({
    name: 'Professor',
    fields: {
        id: {
            type: GraphQLID,
        },
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
    }
});

module.exports = professorType;