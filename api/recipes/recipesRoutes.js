const express = require('express');
const Recipes = require('./recipesModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes().then(recipes => {
        res.status(200).json(recipes);
    });
});

router.get('/:id/ingredients', (req, res) => {
    const id = req.params.id;

    Recipes.getShoppingList(id).then(ingredients => {
        res.status(200).json(ingredients);
    });
});

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;

    Recipes.getInstructions(id).then(instructions => {
        res.status(200).json(instructions);
    });
});

module.exports = router;
