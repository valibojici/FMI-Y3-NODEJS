const models = require("../../models");

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
} = require('graphql');

const courseStudentType = new GraphQLObjectType({
    name: 'CourseStudent',
    fields: () => {
        const studentType = require("./studentType")
        const courseType = require("./courseType")

        return ({
            student: {
                type: studentType,
                resolve: async (courseStudent) => { return await courseStudent.getStudent(); }
            },
            course: {
                type: courseType,
                resolve: async (courseStudent) => { return await courseStudent.getCourse(); }
            },
        })
    }
});

module.exports = courseStudentType;