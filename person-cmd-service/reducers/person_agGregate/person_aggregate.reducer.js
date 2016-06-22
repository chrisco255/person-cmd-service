const {
	PERSON_CREATED
} = require('../../commands/event_types');
const log = require('../../log');

function reducer(persons = [], action ) {
	log.debug('IN REDUCER');

	switch(action.type) {
		case PERSON_CREATED:
			return personCreated(persons, action.payload);
	}
	return persons;
}

function personCreated(persons, payload) {
	return [...persons, payload];
}

module.exports = reducer;