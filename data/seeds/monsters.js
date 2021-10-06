const monsters = require('../../initialMonsters');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('monsters')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert(monsters);
    });
};
