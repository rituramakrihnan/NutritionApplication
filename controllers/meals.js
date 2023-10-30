const mealsRouter = require('express').Router();
const Meal = require('../models/meal');

// SEE ALL DATA
mealsRouter.get('/', async (request, response) => {
    const meals = await Meal
        .find({})
        .populate('user', { username: 1, name: 1 });
    response.json(meals);
})

// SEE A SPECIFIC MEAL
mealsRouter.get('/:id', (request, response, next) => {
    Meal.findById(request.params.id)
        .then(meal => {
            if (meal) {
                response.json(meal);
            } else {
                response.status(404).end();
            }
        })
        .catch(error => next(error));
});


// ADD DATA
mealsRouter.post('/', async (request, response) => {
    const body = request.body;
    const user = request.user;
    const meal = new Meal({
        name: body.name,
        picture: body.picture,
        calories: body.calories,
        ingredients: body.ingredients,
        cookTime: body.cookTime,
        urlLink: body.urlLink,
        user: user._id,
    });

    const savedMeal = await meal.save();
    user.meals = user.meals.concat(savedMeal._id);
    await user.save();
    response.status(201).json(savedMeal);
});

// DELETE A MEAL BY ID
mealsRouter.delete('/:id', async (request, response) => {
    await Meal.findByIdAndRemove(request.params.id);
    response.status(204).end();
});


module.exports = mealsRouter;