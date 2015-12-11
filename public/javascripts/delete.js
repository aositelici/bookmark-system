$(document).ready(function() {
  deleteBookmark();
});

function deleteBookmark() {
  $('.delete').on('click', function() {
    var bookmarkTitle = $(this).val();
    var deletebutton = $(this);
    $('#deleteModal').modal('show');
    $('#delete').on('click', function() {
      $.ajax({
        url: '/',
        method: 'DELETE',
        data: {
          title : bookmarkTitle
        },
        success: function() {
          deletebutton.parent('.list').remove();
        },
        error: function(request,status,errorthowm) {
          alert(status);
        }
      });
    });
  });
}
