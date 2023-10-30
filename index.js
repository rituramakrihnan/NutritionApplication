const express = require('express')
const cors = require('cors')
const app = require('./app');
const http = require('http');
const config = require('./utils/config');
const logger = require('./utils/logger');


const server = http.createServer(app);

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

server.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
});