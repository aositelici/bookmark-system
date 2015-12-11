'use strict';
var DataHelper = require('../helper/data-helper');
var data = require('../bookmark.json');

function init(data) {
  var dataHelper = new DataHelper();
  return dataHelper.buildBookmarks(data);
}
var origin = init(data);

function HomeController() {
}

HomeController.prototype.index = function(req, res) {
  var inputWord = req.query.input;
  var status = req.query.status;
  var dataHelper = new DataHelper();

  if(status === "search") {
    var filteredBookmarks = dataHelper.filterBookmarks(inputWord, origin);
    //var count = (inputWord === '') ? -1 : filteredBookmarks.length;
    res.send({bookmarks:filteredBookmarks});
  } else {
    res.render('index', {bookmarks: origin});
  }
};

HomeController.prototype.add = function(req, res) {
  var addedBookmark = req.body;
  var dataHelper = new DataHelper();

  dataHelper.refreashBookmarks(origin);
  origin = dataHelper.addBookmark(addedBookmark);
  res.send({bookmarks:origin});
};

HomeController.prototype.delete = function(req, res) {
  var deleteTitle = req.body.title;
  var dataHelper = new DataHelper();

  dataHelper.refreashBookmarks(origin);
  origin = dataHelper.deleteBookmark(deleteTitle);
  res.send('success');
};

module.exports = HomeController;
