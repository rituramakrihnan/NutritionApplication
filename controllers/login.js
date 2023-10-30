const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/user');
loginRouter.post('/', async (request, response) => {
    const body = request.body;
    const user = await User.findOne({ username: body.username });
    const correctPassword = user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash);
    if(!(user && correctPassword)) {
        return response.status(401).json({
            error: 'Invalid username or password'
        });
    }
    let userForToken = {
        username: user.username,
        id: user._id
    };

    let value = jwt.sign(userForToken, process.env.SECRET);
    response
        .status(200)
        .send({
            token: value,
            username: user.username,
            name: user.name,
            id: user._id,
        });
});

module.exports = loginRouter;