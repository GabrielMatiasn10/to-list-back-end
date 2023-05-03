const express =require ('express')

const app = express();
app.get('/tasks', (request, response) => response.status(200).send('fufando'))
app.post('/tasks')

app.listen (3333, () => console.log ('teste 3333'))