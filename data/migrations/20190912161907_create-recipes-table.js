exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 512)
                .notNullable()
                .unique();
            tbl.integer('servings').notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 255)
                .notNullable()
                .unique();
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('quantity');
            tbl.string('measurement', 255);
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('step').notNullable();
            tbl.text('description').notNullable();
        });
};

exports.down = function(knex) {};
