$(function() {

    addComment();
});


function addComment() {
  $('#new_comment').submit(function(e){
    e.preventDefault();
    var values = $(this).serialize();
    var path = $(this).attr('action');
    var posting = $.post(path, values);
    //debugger
  });
}
