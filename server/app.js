const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();

app.use(cors());
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

app.listen(4000, () => {
  console.log('listening to port 4000');
});
