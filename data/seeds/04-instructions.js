exports.seed = function(knex) {
    return knex('instructions')
        .truncate()
        .then(function() {
            return knex('instructions').insert([
                { recipe_id: 1, step: 1, description: 'Flour surface and roll out dough' },
                { recipe_id: 1, step: 2, description: 'Add sauce, then cheese, then pepperoni on top' },
                { recipe_id: 1, step: 3, description: 'Bake in oven at 425 deg for 20 min' },
                { recipe_id: 2, step: 1, description: 'Through all fresh ingredient into a bowl, chopped as desired' },
                { recipe_id: 2, step: 2, description: 'Add dressing' },
                { recipe_id: 3, step: 1, description: 'Flour surface and roll out dough' },
                { recipe_id: 3, step: 2, description: 'Add sauce, then cheese, then pepperoni on top' },
                { recipe_id: 3, step: 3, description: 'Roll up dough so ingredients are inside' },
                { recipe_id: 3, step: 4, description: 'Cut holes in top, place in oven to bake at 425 deg for 20 min' },
                { recipe_id: 4, step: 1, description: 'Combine dough and yeast in a bowl and allow to rise overnight' },
                { recipe_id: 4, step: 2, description: 'Roll dough into a long, thin cylinder and twist into pretzel shape' },
                { recipe_id: 4, step: 3, description: 'Add desired amount of salt' },
                { recipe_id: 4, step: 4, description: 'Place in oven to bake at 350 deg for 25 min' }
            ]);
        });
};
