const express =require('express');

const app = express();

app.get('/', (request, response) => response.status(200).send ('hello, word'));

module.exports = app;