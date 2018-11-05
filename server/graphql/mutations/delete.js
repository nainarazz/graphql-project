const graphql = require('graphql');
const Employee = require('../../models/employee');
const Experience = require('../../models/experience');
const EmployeeType = require('../types/employee');
const ExperienceType = require('../types/experience');

const {
  GraphQLString,
} = graphql;

const deleteMutation = {
  deleteEmployee: {
    type: EmployeeType,
    args: {
      id: { type: GraphQLString },
    },
    resolve(parent, args) {
      return Employee.findByIdAndRemove(args.id);
    },
  },
  deleteExperience: {
    type: ExperienceType,
    args: {
      id: { type: GraphQLString },
    },
    resolve(parent, args) {
      return Experience.findByIdAndRemove(args.id);
    },
  },
};

module.exports = deleteMutation;
