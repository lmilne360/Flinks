$(function() {

    addComment();
});


function addComment() {
  $(document).on("submit",'#new_comment', function(e){
    e.preventDefault();
    var values = $(this).serialize();
    var posting = $.post("/comments.js", values);
  });
}
