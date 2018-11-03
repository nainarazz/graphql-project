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
    experience: {
      type: ExperienceType,
      resolve(parent) {
        return Experience.findById(parent.experienceId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employee: {
      type: EmployeeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Employee.findById(id);
      },
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve() {
        return Employee.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        nom: { type: GraphQLString },
        prenom: { type: GraphQLString },
        age: { type: GraphQLInt },
        poste: { type: GraphQLString },
        experienceId: { type: GraphQLID },
      },
      resolve(parent, args) {
        const employee = new Employee({
          nom: args.nom,
          prenom: args.prenom,
          age: args.age,
          poste: args.poste,
          experienceId: args.experienceId,
        });
        return employee.save();
      },
    },
    addExperience: {
      type: ExperienceType,
      args: {
        titre: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const experience = new Experience({
          titre: args.titre,
          description: args.description,
        });
        return experience.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
