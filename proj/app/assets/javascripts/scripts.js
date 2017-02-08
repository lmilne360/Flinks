$(function() {

    addComment();
});


function addComment() {
  $('#new_comment').submit(function(e){
    e.preventDefault();
    var values = $(this).serialize();
    var path = $(this).attr('action') + '.js';
    var posting = $.post(path, values);
    posting.done(function(data) {
      //debugger
    });
  });
}
