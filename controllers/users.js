const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (request, response) => {
    const users = await User
        .find({})
        .populate('meals', { name: 1, picture: 1, calories: 1 , ingredients:1,cookTime:1,urlLink:1, });
    response.json(users);
});

usersRouter.post('/', async (request, response) => {
    const body = request.body;
    if (body.password === undefined || body.password.length < 3) {
        return response
            .status(400)
            .send({ error: 'Password is short or missing' });
    }
    try {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(body.password, saltRounds);
        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash
        });
        const savedUser = await user.save();
        response.json(savedUser);
    } catch (error) {
        response
            .status(400)
            .send({ error: 'Username is short' });
    }
});

module.exports = usersRouter;