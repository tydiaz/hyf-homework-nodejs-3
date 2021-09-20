const express = require('express');

const app = express();
const PORT = 3000;

const users = [
  { id: 0 }
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send([]);
});

app.get('/users/:id', (req, res) => {
  res.send('id ' + req.params.id);
})

app.post('/users', (req, res) => {
  res.json(req.body.users);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
