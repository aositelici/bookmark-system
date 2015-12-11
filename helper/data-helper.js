'use strict';
var Bookmark = require('../model/bookmark');

function DataHelper() {
  this.bookmarks = [];
}

DataHelper.prototype.getFormatDate= function(number) {
    var date = new Date(parseInt(number)*1000);
    return 'created@' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate());
};

DataHelper.prototype.buildBookmarks = function(data) {
  var _this = this;
  data.forEach(function(item) {
    var date = _this.getFormatDate(item.created);
    var bookmark = new Bookmark(item.title, date, item.address);
    _this.bookmarks.push(bookmark);
  });
  return this.bookmarks;
};

DataHelper.prototype.refreashBookmarks = function(bookmarks) {
  this.bookmarks = bookmarks;
};

DataHelper.prototype.filterBookmarks = function(keyword, data) {
  var patten = new RegExp("("+keyword+")","ig");
  var result = data.filter(function (subData){
    return patten.test(subData.title);
  });
  return result;
};

DataHelper.prototype.addBookmark = function(data) {
  var date = this.getFormatDate(data.date/1000);
  var bookmark = new Bookmark(data.title, date, data.address);
  this.bookmarks.push(bookmark);
  return this.bookmarks;
};

DataHelper.prototype.deleteBookmark = function(title) {
  this.bookmarks =  this.bookmarks.filter(function(item) {
    return item.title !== title;
  });
  return this.bookmarks;
};

module.exports = DataHelper;
