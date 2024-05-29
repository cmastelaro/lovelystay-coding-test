'use strict';

exports.up = function(db, callback) {
  const query = `
    CREATE INDEX idx_programming_languages_name 
    ON programming_languages (name);
  `;
  db.runSql(query, callback);
};

exports.down = function(db, callback) {
  const query = `DROP INDEX idx_programming_languages_name;`;
  db.runSql(query, callback);
};
