const models = require("../../models");


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
} = require('graphql');

const gradeType = new GraphQLObjectType({
    name: 'Course',
    fields: () => {
        const studentType = require("./studentType")
        const courseType = require("./courseType")

        return ({
            id: {
                type: GraphQLID,
            },
            grade: {
                type: GraphQLInt,
            },
            student: {
                type: studentType,
                resolve: (grade) => { return models.Student.findByPk(grade.studentId)}
            },
            course: {
                type: courseType,
                resolve: (grade) => { return models.Course.findByPk(grade.courseId)}
            },
        })
    }
});

module.exports = courseType;