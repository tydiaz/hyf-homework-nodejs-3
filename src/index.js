const express = require('express');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send([]);
});

app.get('/users/:id', (req, res) => {
  res.json({ user: req.params.id });
})

app.post('/users', (req, res) => {
  res.json({ id: 0 });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
