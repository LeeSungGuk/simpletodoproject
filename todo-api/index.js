const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { getTasks, addTask } = require('./task');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
    res.send({
        tasks: getTasks(),
    });
});

app.post('/tasks', (req, res) => {
    const { title } = req.body;
    addTask(title);
    res.send();
});

app.listen(3000, () => {
    console.log('Listen!');
});
