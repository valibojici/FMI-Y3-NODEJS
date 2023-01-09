const {
    GraphQLObjectType,
} = require('graphql');

const createStudentMutation = require('./mutations/student/createStudentMutation');
const updateStudentMutation = require('./mutations/student/updateStudentMutation');
const deleteStudentMutation = require('./mutations/student/deleteStudentMutation');

const createProfessorMutation = require('./mutations/professor/createProfessorMutation');
const updateProfessorMutation = require('./mutations/professor/updateProfessorMutation');
const deleteProfessorMutation = require('./mutations/professor/deleteProfessorMutation');


const createCourseMutation = require('./mutations/course/createCourseMutation');
const updateCourseMutation = require('./mutations/course/updateCourseMutation');
const deleteCourseMutation = require('./mutations/course/deleteCourseMutation');

const loginMutation = require('./mutations/loginMutation');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createStudent: createStudentMutation,
        updateStudent: updateStudentMutation,
        deleteStudent: deleteStudentMutation,

        createProfessor: createProfessorMutation,
        updateProfessor: updateProfessorMutation,
        deleteProfessor: deleteProfessorMutation,

        createCourse: createCourseMutation,
        updateCourse: updateCourseMutation,
        deleteCourse: deleteCourseMutation,

        login: loginMutation,
    }
});

module.exports = mutationType;
