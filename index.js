const express = require('express');
const JWTMiddleware = require('./middlewares/JWTMiddleware');
const { graphqlHTTP } = require('express-graphql');
const app = express();

const schema = require('./graphql');

app.use(express.json());

app.get('/graphql', JWTMiddleware, graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.post('/graphql', JWTMiddleware, graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.listen(8080);