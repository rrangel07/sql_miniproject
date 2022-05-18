const express = require('express');


const delet = require('./delete');
const add = require('./add_movie');
const update = require('./update');
const render = require('./render_movies');

const app = express();

app.use('/add-movie', add);
app.use('/api/update-review', update);
app.use('/movies', render);
app.use('/api/movie/:id', delet);

module.exports = app;