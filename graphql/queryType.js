const {
    GraphQLObjectType,
} = require('graphql');

const studentsQuery = require('./queries/studentsQuery');
const studentQuery = require('./queries/studentQuery');
const professorsQuery = require('./queries/professorsQuery');
const professorQuery = require('./queries/professorQuery');
const groupQuery = require('./queries/groupQuery');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      students: studentsQuery,
      student: studentQuery,
      professors: professorsQuery,
      professor: professorQuery,
      group: groupQuery,
    }
  });

module.exports = queryType;
