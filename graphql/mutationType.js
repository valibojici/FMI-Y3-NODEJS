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

const createGradeMutation = require('./mutations/grade/createGradeMutation');
const updateGradeMutation = require('./mutations/grade/updateGradeMutation');
const deleteGradeMutation = require('./mutations/grade/deleteGradeMutation');

const loginMutation = require('./mutations/loginMutation');
const signupMutation = require('./mutations/signupMutation');

const createCourseStudentsMutation = require('./mutations/courseStudents/createCourseStudentsMutation');
const deleteCourseStudentsMutation = require('./mutations/courseStudents/deleteCourseStudentsMutation');

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

        createGrade: createGradeMutation,
        updateGrade: updateGradeMutation,
        deleteGrade: deleteGradeMutation,

        addStudentToCourse: createCourseStudentsMutation,
        removeStudentFromCourse: deleteCourseStudentsMutation,

        login: loginMutation,
        signup: signupMutation,
    }
});

module.exports = mutationType;
