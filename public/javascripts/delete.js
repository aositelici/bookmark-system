$(document).ready(function() {
  $('.delete').on('click', function() {
    var bookmarkTitle = $(this).val();
    var deletebutton = $(this);
    $('#deleteModal').modal('show');
    $('#delete').on('click', function() {
      $.ajax({
        url: '/',
        method: 'POST',
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
});
