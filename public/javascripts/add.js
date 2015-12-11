$(document).ready(function() {
  addBookmark();
});

function addBookmark() {
  $('.add').on('click', function() {
    $('#addModal').modal('show');
    var date = new Date();
    $('#add').on('click', function() {
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
          success: function() {
            $('#name').val('');
            $('#address').val('');
            $('#input-null').css('display','none');
            $('#addModal').modal('hide');
          },
          error: function(request,status,errorthowm) {
          alert(status);
        }
      });
    }
    });
  });
}
