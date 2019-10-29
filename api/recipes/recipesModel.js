const db = require('../../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes').then(recipes => {
        return recipes;
    });
} // should return a list of all recipes in the database.

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as ri')
        .join('ingredients as i', 'i.id', 'ri.ingredient_id')
        .select('i.name', 'ri.quantity', 'ri.measurement')
        .where({ 'ri.recipe_id': recipe_id })
        .then(ingredients => {
            return ingredients;
        });
} // should return a list of all ingredients and quantities for a given recipe

function getInstructions(recipe_id) {
    return db('instructions as in')
        .select('in.step', 'in.description')
        .where({ 'in.recipe_id': recipe_id })
        .then(instructions => {
            return instructions;
        });
}
