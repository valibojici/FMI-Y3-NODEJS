const {
    GraphQLNonNull,
    GraphQLInt,
} = require("graphql");
const courseStudentType = require("../../types/courseStudentType");
const deleteCourseStudentResolver = require("../../resolvers/courseStudent/deleteCourseStudentResolver");

module.exports = {
    type: courseStudentType,
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
