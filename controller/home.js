'use strict';

var DataHelper = require('../helper/data-helper');
var data = require('../bookmark.json');

function HomeController() {

}

HomeController.prototype.index = function(req, res) {
  var inputWord = req.query.input;
  var status = req.query.status;
  if(status === "search") {
    var patten = new RegExp("("+inputWord+")","ig");
    var result = data.filter(function (subData){
      return patten.test(subData.title);
    });
    var dataHelper = new DataHelper();
    var bookmarks = dataHelper.getBookmarks(result);
    res.send(bookmarks);
  } else {
    var dataHelper = new DataHelper();
    var bookmarks = dataHelper.getBookmarks(data);
    res.render('index', {bookmarks: bookmarks});
  }
};

HomeController.prototype.add = function(res, req) {

};

HomeController.prototype.delete = function(res, req) {

};

module.exports = HomeController;
