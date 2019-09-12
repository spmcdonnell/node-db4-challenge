exports.seed = function(knex) {
    return knex('recipes')
        .truncate()
        .then(function() {
            return knex('recipes').insert([{ name: 'Pizza', servings: '4' }, { name: 'Big Salad', servings: 1 }, { name: 'Calzone', servings: 1 }, { name: 'Soft Pretzel', servings: 1 }]);
        });
};
