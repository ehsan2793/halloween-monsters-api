const knexfile = require('../knexfile');
const knex = require('knex');

const env = process.env.NODE_EN || 'development';

module.exports = knex(knexfile[env]);
