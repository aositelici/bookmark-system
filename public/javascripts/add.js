$(document).ready(function() {
  addBookmark();
});

function addBookmark() {
  $('.add').on('click', function() {
    $('#addModal').unbind().modal('show');
    var date = new Date();
    $('#add').unbind().on('click', function() {
      if($('#name').val() === '' || $('#address').val() === '') {
        $('#input-null').css('display','block');
        return;
      }
      else {
        $.ajax({
          url: '/',
          method: 'POST',
          data: {
            title: $('#name').val(),
            address: $('#address').val(),
            date: date
          },
          success: function(res) {
            $('#name').val('');
            $('#address').val('');
            $('#input-null').css('display','none');
            $('#addModal').modal('hide');

            $("#content").html("");
            var bookmarks = res.bookmarks;
            bookmarks.forEach(function(bookmark) {
              appendBookmark(bookmark.title, bookmark.title, bookmark.date, bookmark.address);
            });
          }
        });
      }
    });
  });
}
