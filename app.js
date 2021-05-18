const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const user = require('./model/Schema');
const port = 3000;

const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
mongoose.connect('mongodb://localhost:27017/New', { useNewUrlParser: true, useUnifiedTopology: true })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {

  new user({
    name: req.body.Inputname
  }).save();

  res.redirect('/');
})



app.get('/', (req, res) => {
  res.render('index');
}).listen(port, () => {
  console.log(' its running on port : 3000');
})

module.exports = app;