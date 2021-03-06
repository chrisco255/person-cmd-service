// Will be in charge of persisting to mongo
const log = require('../log');
const {
  SERVER_ERROR
} = require('../error_types');
const MongoSingle = require('../mongo_single');

function persistEvent(event) {
  log.info('Persisting event...');
  log.debug('event: ', event);

  return new Promise((resolve, reject) => {
    MongoSingle
      .connect()
      .then((db) => {
        db.collection('events')
          .insertOne(event, function(err, r) {
            if (err) {
              log.error('ERROR PERSISTING EVENT: ', event);
              return reject({
                type: SERVER_ERROR,
                err
              });
            }

            log.info('Persisted event: ', r.ops[0]);
            resolve(r.ops[0]);
          });
      });
  });
}

module.exports = persistEvent;
