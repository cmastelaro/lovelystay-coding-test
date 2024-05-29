'use strict';

exports.up = function(db, callback) {
  const query = `
    CREATE TABLE programming_languages (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE
    );
  `;
  db.runSql(query, callback);
};

exports.down = function(db, callback) {
  const dropTableQuery = `DROP TABLE programming_languages;`;
  db.runSql(dropTableQuery, callback);
};
