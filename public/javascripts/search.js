$(document).ready(function() {
  $("input:text").bind("input propertychange",function(){
    var inputWord = $(this).val()
      .replace(/^\s+|\s+$/g, "")
      .replace(/\s+/g, "|");

      $.get('/', {input: inputWord, status: "search"}, function (res) {
         $("#content").html("");
          var bookmarks = res.bookmarks;
          var count = res.count;
          showCount(count);
          bookmarks.forEach(function(bookmark) {
            highLightMatchingword(inputWord, bookmark);
          });
         setPage();
       });
  });

  function setPage() {
    $('.holder').jPages({
        containerID : "content",
        previous : "←",
        next : "→",
        perPage : 10,
        delay : 10
    });
  }

  function appendBookmark(title,date) {
    var content='<p class="bookmark">' + title + '</p>';
    var createdDate = $("<p></p>").text(date).addClass("date");
    var line = $("<hr>").addClass("line");
    var item = $("<li></li>").addClass("list");
    item.append(content);
    item.append(createdDate);
    item.append(line);
    $('#content').append(item);
  }


  function highLightMatchingword(keyword, item) {
    var patten = new RegExp("("+keyword+")","ig");
    var highLight = item.title.replace(patten,'<span style="background-color:#f54698">'+'$1'+'</span>');
    appendBookmark(highLight,item.date);
  }

  function showCount(count) {
    if(count !== -1) {
      $('#count').html('搜索到'+count+'个结果');
    } else {
      $('#count').html("");
    }
  }
});
