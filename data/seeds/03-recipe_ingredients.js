exports.seed = function(knex) {
    return knex('recipe_ingredients')
        .truncate()
        .then(function() {
            return knex('recipe_ingredients').insert([
                { recipe_id: 1, ingredient_id: 1, quantity: 2, measurement: 'cups' },
                { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: 'tablespoons' },
                { recipe_id: 1, ingredient_id: 3, quantity: 1, measurement: 'cups' },
                { recipe_id: 1, ingredient_id: 4, quantity: 1, measurement: 'cups' },
                { recipe_id: 1, ingredient_id: 6, quantity: 2, measurement: 'cups' },
                { recipe_id: 2, ingredient_id: 5, quantity: 2, measurement: 'cups' },
                { recipe_id: 2, ingredient_id: 7, quantity: 3, measurement: 'tablespoons' },
                { recipe_id: 2, ingredient_id: 8, quantity: 1, measurement: 'cups' },
                { recipe_id: 2, ingredient_id: 9, quantity: 1, measurement: 'cups' },
                { recipe_id: 2, ingredient_id: 10, quantity: 1, measurement: 'cups' },
                { recipe_id: 3, ingredient_id: 1, quantity: 2, measurement: 'cups' },
                { recipe_id: 3, ingredient_id: 2, quantity: 1, measurement: 'tablespoons' },
                { recipe_id: 3, ingredient_id: 3, quantity: 1, measurement: 'cups' },
                { recipe_id: 3, ingredient_id: 4, quantity: 1, measurement: 'cups' },
                { recipe_id: 3, ingredient_id: 6, quantity: 2, measurement: 'cups' },
                { recipe_id: 4, ingredient_id: 1, quantity: 2, measurement: 'cups' },
                { recipe_id: 4, ingredient_id: 2, quantity: 0.5, measurement: 'teaspoons' },
                { recipe_id: 4, ingredient_id: 11, quantity: 0.25, measurement: 'teaspoons' }
            ]);
        });
};
