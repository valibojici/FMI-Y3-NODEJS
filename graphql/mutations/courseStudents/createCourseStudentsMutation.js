const {
    GraphQLNonNull,
    GraphQLInt,
} = require("graphql");
const courseStudentType = require("../../types/courseStudentType");
const createCourseStudentResolver = require("../../resolvers/courseStudent/createCourseStudentResolver");

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
    resolve: createCourseStudentResolver,
}
