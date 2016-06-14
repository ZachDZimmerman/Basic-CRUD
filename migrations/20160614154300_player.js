
exports.up = function(knex, Promise) {
  // create the tableName
  return knex.schema.createTable('player', function(table) {
    table.incruments();
    table.string('name');
    table.string('country');
    table.integer('age');
  })
};

exports.down = function(knex, Promise) {
  return table.schema.dropTable('player');
};
