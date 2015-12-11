$(document).ready(function() {
  search();
});

function search() {
  $("#search").bind("input propertychange",function(){
    var inputWord = $(this).val()
      .replace(/^\s+|\s+$/g, "")
      .replace(/\s+/g, "|");

      $.get('/', {input: inputWord, status: "search"}).done(function (res) {
         $("#content").html("");
          var bookmarks = res.bookmarks;
          bookmarks.forEach(function(bookmark) {
            highLightMatchingword(inputWord, bookmark);
          });
         setPage();
         deleteBookmark();
         showCount($("#content li").length);
      });
  });
}

function appendBookmark(originTitle, title, date, address) {
  var content;
  if(address) {
    content=$("<a></a>").addClass("bookmark").attr('href',address).text(title);
  } else {
    content='<p class="bookmark">' + title + '</p>';
  }
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
  var highLight = item.title.replace(patten,'<font style="background-color:#f54698">'+'$1'+'</font>');
  appendBookmark(originTitle, highLight, item.date, item.address);
}

function showCount(count) {
  var input = $('#search').val()
    .replace(/^\s+|\s+$/g, "")
    .replace(/\s+/g, "|");
  if(input) {
    $('#count').html('搜索到'+count+'个结果');
  } else {
    $('#count').html("");
  }
}
