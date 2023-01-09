const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
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
                resolve: (course) => { return course.getProfessor() }
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