'use strict';

exports.up = function(db, callback) {
  const query = `
    CREATE INDEX idx_user_location ON users(location);
  `;
  db.runSql(query, callback);
};

exports.down = function(db, callback) {
  const query = `DROP INDEX idx_user_location;`;
  db.runSql(query, callback);
};
