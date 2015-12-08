'use strict';
var route = require('./index');

exports.setRoutes = function (app) {
  app.use('/', route);
};
