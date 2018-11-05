const graphql = require('graphql');
const Employee = require('../../models/employee');
const Experience = require('../../models/experience');
const EmployeeType = require('../types/employee');
const ExperienceType = require('../types/experience');

const {
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

const updateMutation = {
  updateEmployee: {
    type: EmployeeType,
    args: {
      id: { type: GraphQLString },
      nom: { type: GraphQLString },
      prenom: { type: GraphQLString },
      age: { type: GraphQLInt },
      poste: { type: GraphQLString },
      experienceId: { type: GraphQLID },
    },
    resolve(parent, args) {
      const { id, ...data } = args;

      const update = { $set: { ...data } };
      const options = { new: true };

      return Employee.findByIdAndUpdate(id, update, options);
    },
  },
  updateExperience: {
    type: ExperienceType,
    args: {
      id: { type: GraphQLString },
      titre: { type: GraphQLString },
      description: { type: GraphQLString },
    },
    resolve(parent, args) {
      const { id, ...data } = args;

      const update = { $set: { ...data } };
      const options = { new: true };

      return Experience.findByIdAndUpdate(id, update, options);
    },
  },
};

module.exports = updateMutation;
