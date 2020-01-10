'use strict';

const express = require('express');
const port = 3000;
const app = express();
const quotes = require('random-movie-quotes');

app.use(express.static('public'));

app.get('/quote', (req, res) => {
  res.json({
    quote: quotes.getQuote(),
  });
});

app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));

module.exports = app;
