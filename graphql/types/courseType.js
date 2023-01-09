const models = require("../../models");


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
} = require('graphql');

const courseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => {
        const professorType = require("./professorType")
        const studentType = require("./studentType")

        return ({
            id: {
                type: GraphQLID,
            },
            name: {
                type: GraphQLString,
            },
            professor: {
                type: professorType,
                resolve: (course) => { return models.Professor.findByPk(course.professorId) }
            },
            students: {
                type: new GraphQLList(studentType),
                resolve: async (course) => {
                    return course.getStudents();
                }
            },
        })
    }
});

module.exports = courseType;