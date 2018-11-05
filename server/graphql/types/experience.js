const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphql;

const ExperienceType = new GraphQLObjectType({
  name: 'Experience',
  fields: () => ({
    id: { type: GraphQLID },
    titre: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

module.exports = ExperienceType;
