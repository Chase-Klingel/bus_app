'use strict';

exports.up = function(knex) {
  return knex.schema.createTable(`stop_30635_raw`, (table) => {
    table.increments();
    table.integer('trip_id').references('id').inTable('trips')
          .onDelete('CASCADE').index();
    table.datetime('scheduled_time').notNullable().index();
    table.datetime('actual_time').notNullable();
    table.integer('distance').notNullable().defaultTo('52800');
    table.timestamp('created_at').defaultTo(knex.fn.now()).index();
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('stop_30635_raw');
};
