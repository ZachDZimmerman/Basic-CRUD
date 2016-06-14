var enviornment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[enviornment]
var knex = require('knex')(config);

module.exports = knex;
