'use strict';
var DataHelper = require('../helper/data-helper');
var data = require('../bookmark.json');
function HomeController() {

}

HomeController.prototype.index = function(req, res) {
  var dataHelper = new DataHelper();
  var bookmarks = dataHelper.getBookmarks(data);
  res.render('index', bookmarks);
};

HomeController.prototype.add = function(res, req) {

};

HomeController.prototype.delete = function(res, req) {

};

module.exports = HomeController;
