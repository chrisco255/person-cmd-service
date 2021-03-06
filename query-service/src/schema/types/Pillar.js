const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLBoolean } = require('graphql');
const Content = require('./Content');
const store = require('../../store');

const Pillar = new GraphQLObjectType({
  name: 'Pillar',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID of the person'
    },
    tenantId: {
      type: GraphQLString,
      description: 'ID of the tenant'
    },
    name: {
      type: GraphQLString,
      description: 'Name of pillar'
    },
    content: {
      type: new GraphQLList(Content), //List of content types
      description: 'Array of content ids',
      resolve: (pillar) => {
        const contents = store.getState().contents;
        pillar.content = pillar.content || [];
        return pillar.content.map( (contentId) => {
          return contents.filter(content => content._id === contentId);
        }) || null;
      }
    },
    isDeleted: {
      type: GraphQLBoolean,
      description: 'If pillar has been deleted'
    }
  })
});

module.exports = Pillar;
