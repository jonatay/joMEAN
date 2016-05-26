
var knex = require('knex')({
    client: 'pg',
    connection: require('../../app_config/config').pgConnection
});

module.exports = require('bookshelf')(knex);

