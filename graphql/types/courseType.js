const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
} = require('graphql');

const professorType = require("./professorType")
const studentType = require("./studentType")

const courseType = new GraphQLObjectType({
    name: 'Course',
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        professor: {
            type: professorType,
            resolve: (course) => {return course.getProfessor()}
        },
        students: {
            type: new GraphQLList(studentType),
            resolve: async (course) => {
                return course.getStudents();
            }
        },
    }
});

module.exports = courseType;