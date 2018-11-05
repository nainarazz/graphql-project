const graphql = require('graphql');
const Employee = require('../../models/employee');
const EmployeeType = require('../types/employee');

const {
  GraphQLID,
  GraphQLList,
} = graphql;

const query = {
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
};

module.exports = query;
