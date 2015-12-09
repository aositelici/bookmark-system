$(document).ready(function() {
  $("input:text").bind("input propertychange",function(){
    var inputWord = $(this).val()
      .replace(/^\s+|\s+$/g, "")
      .replace(/\s+/g, "|");

    if(inputWord !== '') {
      $.get('/', {input: inputWord, status: "search"}, function (res) {
         $("#content").html("");
         res.forEach(function(item) {
           appendBookmark(item.title,item.date);
         });
         setPage();
       });
    }
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
  /*function refreshContent(keyword) {
    $.get('/', {input: keytword}, function (res) {
       $("#content").html("");
       res.forEach(function(item) {
         appendbookmark(item.title,item.date);
       });
     });
  }*/

  /*function highLightMatchingword(inputWord, data, bookmarks) {
    if(inputWord !== "") {
      clearHtml();

      var patten = new RegExp("("+inputWord+")","ig");
      data.filter(function (subData){
        return patten.test(subData.title);
      })
      .map(function (subData){
        var highLightBookmark = subData.title.replace(patten,'<span style="background-color:#f54698">'+'$1'+'</span>');
        appendbookmark(highLightBookmark,subData.created);
      });

    } else {
      showInitBookmark(bookmarks);
    }
  }*/
});
