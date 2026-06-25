import express from 'express';

const port = 3000;
const app = express();

app.use(express.json()); //allows server to read JSON requests

const items = ['A', 'B'];

app.get('/items', (req, res) => {
  console.log("A");
  res.json(items);
});

app.post('/items', (req, res) => {
  console.log("B");
  items.push(req.body.newItem);
  res.status(201).json({ message: 'Item added!' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
