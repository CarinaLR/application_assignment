'use strict';

const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// app.get('/quote', (req, res) => {
//   res.json({
//     quote: quotes.getQuote(),
//   });
// });

app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));

module.exports = app;
