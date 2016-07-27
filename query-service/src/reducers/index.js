const { combineReducers } = require('redux');

const tenants = require('./tenants/tenants.reducer.js');
const employees = require('./employees/employees.reducer.js');
const persons = require('./persons/person.reducer.js');
const pillars = require('./pillars/pillar.reducer.js');
const users = require('./users/user.reducer.js');
const contents = require('./contents/contents.reducer.js');

const reducers = {
	tenants,
	employees,
	persons,
  pillars,
  users,
	contents
};

module.exports = combineReducers(reducers);
