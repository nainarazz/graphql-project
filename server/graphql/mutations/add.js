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

const add = {
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
};

module.exports = add;
