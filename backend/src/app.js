const express =require('express');
const router = require('./router');

const app = express();

app.use(router)

app.get('/', (request, response) => response.status(200).send ('hello, oi'));

module.exports = app;