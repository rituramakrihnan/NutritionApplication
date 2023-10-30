const express = require("express")
const app = express()
const cors = require("cors")
const config = require("./utils/config")
const mealsRouter = require("./controllers/meals")
require("express-async-errors");
const usersRouter = require('./controllers/users');
const middleware = require('./utils/middleware');
const loginRouter = require('./controllers/login');
const mongoose = require("mongoose").set("strictQuery", true)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log("connected to MongoDB")
    })
    .catch((error) => {
        console.error("error connecting to MongoDB:", error.message)
    });

app.use(cors())
app.use(express.json());
app.use(express.static('build'));

app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use("/api/meals", middleware.userExtractor, mealsRouter)
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app