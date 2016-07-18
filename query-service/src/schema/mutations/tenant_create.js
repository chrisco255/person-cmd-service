const {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} = require('graphql');

const axios = require('axios');
const { Tenant, InputTenantContact } = require('../types');

const TENANT_CREATE = {
  type: Tenant,
  description: 'Creates a Person and sends `command.TENANT_CREATE`',
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    address: {type: new GraphQLNonNull(GraphQLString)},
    contact: {type: new GraphQLNonNull(InputTenantContact)}
  },
  resolve: (rootValue, args) => {
    const type = 'command.TENANT_CREATE';

    const body = {
      type,
      payload: args
    };
    return axios.post('http://tenant-cmd/', body)
                .then( res => res.data )
                .catch(err => { throw err.data; });
  }
};

module.exports = TENANT_CREATE;
