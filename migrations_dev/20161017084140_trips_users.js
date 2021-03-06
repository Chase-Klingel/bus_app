'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('trips_users', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users')
          .onDelete('CASCADE').index();
    table.integer('trip_id').references('id').inTable('trips')
          .onDelete('CASCADE').index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('trips_users');
};
