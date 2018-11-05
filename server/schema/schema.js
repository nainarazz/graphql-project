const graphql = require('graphql');
const mutation = require('../graphql/mutations/index');
const query = require('../graphql/queries/employeeQueries');

const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: query,
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: mutation,
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
