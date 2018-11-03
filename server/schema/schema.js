const graphql = require('graphql');
const Employee = require('../models/employee');
const Experience = require('../models/experience');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = graphql;

// dummy data
const employees = [
  {
    nom: 'Naina', prenom: 'Thiery', age: 23, poste: 'Software Developer', experienceId: 1,
  },
  {
    nom: 'Razafindrabiby', prenom: 'Anitha', age: 21, poste: 'Student', experienceId: 2,
  },
  {
    nom: 'Razafindrabiby', prenom: 'Nemi', age: 13, poste: 'Student', experienceId: 3,
  },
];

const experiences = [
  {
    id: 1,
    titre: 'senior',
    description: 'test1',
  },
  {
    id: 2,
    titre: 'senior1',
    description: 'test2',
  },
  {
    id: 3,
    titre: 'senior3',
    description: 'test3',
  },
];

const ExperienceType = new GraphQLObjectType({
  name: 'Experience',
  fields: () => ({
    id: { type: GraphQLID },
    titre: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLID },
    nom: { type: GraphQLString },
    prenom: { type: GraphQLString },
    age: { type: GraphQLInt },
    poste: { type: GraphQLString },
    experienceId: { type: GraphQLID },
    experience: {
      type: ExperienceType,
      resolve(parent) {
        // get the experience type data
        return experiences.find(e => e.id === parent.experienceId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employee: {
      type: EmployeeType,
      args: { name: { type: GraphQLString } },
      resolve(parent, { name }) {
        // code to get data from db
        return employees.find(e => e.prenom === name);
      },
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve() {
        return employees;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
