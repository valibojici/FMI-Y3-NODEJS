const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
} = require('graphql');


const studentType = new GraphQLObjectType({
    name: 'Student',
    fields: () => {
        const courseType = require("./courseType");
        const gradeType = require("./gradeType");

        return ({
            id: {
                type: GraphQLID,
            },
            firstName: {
                type: GraphQLString,
            },
            lastName: {
                type: GraphQLString,
            },
            courses: {
                type: new GraphQLList(courseType),
                resolve: async (student) => {
                    return student.getCourses();
                }
            },
            grades: {
                type: new GraphQLList(gradeType),
                resolve: async (student) => {
                    return student.getGrades();
                }
            }
        })
    }
});

module.exports = studentType;