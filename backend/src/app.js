const express =require('express');
const router = require('./router');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.use(router);

app.get('/', (request, response) => response.status(200).send ('hello, oi'));

module.exports = app;