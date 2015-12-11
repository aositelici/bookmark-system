'use strict';
var Bookmark = require('../model/bookmark');

function BookmarkFactory() {
  this.bookmarks = [];
}

BookmarkFactory.prototype.getFormatDate= function(number) {
    var date = new Date(parseInt(number)*1000);
    return 'created@' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate());
};

BookmarkFactory.prototype.buildBookmarks = function(data) {
  var _this = this;
  data.forEach(function(item) {
    var date = _this.getFormatDate(item.created);
    var bookmark = new Bookmark(item.title, date, item.address);
    _this.bookmarks.push(bookmark);
  });
  return this.bookmarks;
};

BookmarkFactory.prototype.refreashBookmarks = function(bookmarks) {
  this.bookmarks = bookmarks;
};

BookmarkFactory.prototype.filterBookmarks = function(keyword, data) {
  var patten = new RegExp("("+keyword+")","ig");
  var result = data.filter(function (subData){
    return patten.test(subData.title);
  });
  return result;
};

BookmarkFactory.prototype.addBookmark = function(data) {
  var date = this.getFormatDate(data.date/1000);
  var bookmark = new Bookmark(data.title, date, data.address);
  this.bookmarks.push(bookmark);
  return this.bookmarks;
};

BookmarkFactory.prototype.deleteBookmark = function(title) {
  this.bookmarks =  this.bookmarks.filter(function(item) {
    return item.title !== title;
  });
  return this.bookmarks;
};

module.exports = BookmarkFactory;
