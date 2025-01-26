const express = require('express');
const app = express();

// Hardcoded port and message
const port = 3000;
const message = 'Hello, World! This is Preeti DevOps Assignment';

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});