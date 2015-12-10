'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var route = require('./routes/router');

var app = express();

app.locals.data = require('./bookmark.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'lib')));
route.setRoutes(app);

app.listen(3050, function () {
  console.log('listening 3050');
});

module.exports = app;
