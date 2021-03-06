const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
     id: { type: GraphQLString },
     name: { type: GraphQLString },
     genre: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
     movie: {
        type: MovieType,
        args: { id: { type: GraphQLString } },
        resolve(parent, args) {
           //get data from database
        }
     }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery
})