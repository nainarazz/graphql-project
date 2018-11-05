const graphql = require('graphql');
const ExperienceType = require('./experience');
const Experience = require('../../models/experience');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

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
        return Experience.findById(parent.experienceId);
      },
    },
  }),
});

module.exports = EmployeeType;
