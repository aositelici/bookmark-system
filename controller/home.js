'use strict';
var BookmarkFactory = require('../model/bookmark-factory');
var data = require('../bookmark.json');

function init(data) {
  var bookmarkFactory = new BookmarkFactory();
  return bookmarkFactory.buildBookmarks(data);
}
var origin = init(data);

function HomeController() {
}

HomeController.prototype.index = function(req, res) {
  var inputWord = req.query.input;
  var status = req.query.status;
  var bookmarkFactory = new BookmarkFactory();

  if(status === "search") {
    var filteredBookmarks = bookmarkFactory.filterBookmarks(inputWord, origin);
    res.send({bookmarks:filteredBookmarks});
  } else {
    res.render('index', {bookmarks: origin});
  }
};

HomeController.prototype.add = function(req, res) {
  var addedBookmark = req.body;
  var bookmarkFactory = new BookmarkFactory();

  bookmarkFactory.refreashBookmarks(origin);
  origin = bookmarkFactory.addBookmark(addedBookmark);
  res.send({bookmarks:origin});
};

HomeController.prototype.delete = function(req, res) {
  var deleteTitle = req.body.title;
  var bookmarkFactory = new BookmarkFactory();

  bookmarkFactory.refreashBookmarks(origin);
  origin = bookmarkFactory.deleteBookmark(deleteTitle);
  res.send('success');
};

module.exports = HomeController;
