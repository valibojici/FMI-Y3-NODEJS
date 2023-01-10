const {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLBoolean,
} = require("graphql");
const deleteCourseStudentResolver = require("../../resolvers/courseStudent/deleteCourseStudentResolver");

module.exports = {
    type: GraphQLBoolean,
    args: {
        studentId: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        courseId: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve: deleteCourseStudentResolver,
}
