$(document).ready(function() {
  $("input:text").bind("input propertychange",function(){
    var inputWord = $(this).val()
      .replace(/^\s+|\s+$/g, "")
      .replace(/\s+/g, "|");

      $.get('/', {input: inputWord, status: "search"}).done(function (res) {
         $("#content").html("");
          var bookmarks = res.bookmarks;
          var count = res.count;
          showCount(count);
          bookmarks.forEach(function(bookmark) {
            highLightMatchingword(inputWord, bookmark);
          });
         setPage();
         deleteBookmark();
      });
  });

  function appendBookmark(originTitle, title, date) {
    var content='<p class="bookmark">' + title + '</p>';
    var createdDate = $("<p></p>").text(date).addClass("date");
    var item = buildBookmark(originTitle, content, createdDate);
    $('#content').append(item);
  }

  function buildBookmark(originTitle, title, date) {

    var line = $("<hr>").addClass("line");
    var item = $("<li></li>").addClass("list");
    var maincontent = $("<div></div>").addClass("main");
    maincontent.append(title);
    maincontent.append(date);
    maincontent.append(line);
    item.append(maincontent);
    var button = $("<button value='title'>delete</button>").addClass("delete").val(originTitle);
    item.append(button);
    return item;
  }


  function highLightMatchingword(keyword, item) {
    var patten = new RegExp("("+keyword+")","ig");
    var originTitle = item.title;
    var highLight = item.title.replace(patten,'<span style="background-color:#f54698">'+'$1'+'</span>');
    appendBookmark(originTitle, highLight,item.date);
  }

  function showCount(count) {
    if(count !== -1) {
      $('#count').html('搜索到'+count+'个结果');
    } else {
      $('#count').html("");
    }
  }
});
