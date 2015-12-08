var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var route = require('./routes/router');

var app = express();

app.locals.data = require('./bookmark.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

route.setRoutes(app);

app.listen(3000, function () {
  console.log('listening 3000');
});

module.exports = app;
