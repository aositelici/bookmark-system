'use strict';
var Bookmark = require('../model/bookmark');

function DataHelper() {
  this.bookmarks = [];
}

DataHelper.prototype.getFormatDate= function(number) {
    var date = new Date(parseInt(number)*1000);
    return 'created@' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate()+1);
};

DataHelper.prototype.getBookmarks = function(data) {
  var _this = this;
  data.forEach(function(item) {
    var date = _this.getFormatDate(item.created);
    var bookmark = new Bookmark(item.title, date);
    _this.bookmarks.push(bookmark);
  });
  return this.bookmarks;
};

DataHelper.prototype.addBookmark = function(bookmark) {
  this.bookmarks.push(bookmark);
};

DataHelper.prototype.deleteBookmark = function(bookmark) {
  return this.bookmarks.filter(function(item) {
    return item.title !== bookmark.title;
  });
};

module.exports = DataHelper;
