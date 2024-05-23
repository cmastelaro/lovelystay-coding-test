'use strict';

exports.up = function(db, callback) {
  const query = `
    CREATE TABLE user_languages (
      user_id INT REFERENCES users(id),
      language_id INT REFERENCES programming_languages(id),
      PRIMARY KEY (user_id, language_id)
    );
  `;
  db.runSql(query, callback);
};

exports.down = function(db, callback) {
  const query = `DROP TABLE user_languages;`;
  db.runSql(query, callback);
};
