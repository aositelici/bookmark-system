'use strict';

var DataHelper = require('../helper/data-helper');
var data = require('../bookmark.json');

function HomeController() {

}

HomeController.prototype.index = function(req, res) {
  var inputWord = req.query.input;
  var status = req.query.status;
  var dataHelper = new DataHelper();
  var bookmarks;

  if(status === "search") {
    var filteredBookmarks = dataHelper.filterBookmarks(inputWord, data);
    bookmarks = dataHelper.getBookmarks(filteredBookmarks);
    var count = (inputWord === '') ? -1 : bookmarks.length;
    res.send({bookmarks:bookmarks, count: count});
  } else {
    bookmarks = dataHelper.getBookmarks(data);
    res.render('index', {bookmarks: bookmarks});
  }
};

HomeController.prototype.add = function(req, res) {

};

HomeController.prototype.delete = function(req, res) {
  var deleteTitle = req.body.title;
  var dataHelper = new DataHelper();

  dataHelper.getBookmarks(data);
  data = dataHelper.deleteBookmark(deleteTitle);
  res.send('success');
};

module.exports = HomeController;
