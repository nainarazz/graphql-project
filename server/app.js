const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// In production, this should be put in configuration files.
// For the sake of simplicity, I will hardcode the connection string
mongoose.connect('mongodb://admin:admin123@ds249873.mlab.com:49873/employee-db-test');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(3000, () => {
  console.log('listening to port 3000');
});
