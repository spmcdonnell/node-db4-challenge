exports.seed = function(knex) {
    return knex('ingredients')
        .truncate()
        .then(function() {
            return knex('ingredients').insert([{ name: 'dough' }, { name: 'salt' }, { name: 'pepperoni' }, { name: 'flour' }, { name: 'lettuce' }, { name: 'cheese' }, { name: 'caesar dressing' }, { name: 'tomatoes' }, { name: 'mushrooms' }, { name: 'onions' }, { name: 'yeast' }]);
        });
};
