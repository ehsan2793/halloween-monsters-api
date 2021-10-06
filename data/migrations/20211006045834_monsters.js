exports.up = function (knex) {
    return knex.schema.createTable('monsters', (table) => {
        table.increments('monster_id');
        table.string('Monster_name', 30).notNullable().unique();
        table.string('Description').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('monsters');
};
