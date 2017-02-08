$(function() {

    addComment();
    toggleComments();
});


function addComment() {
    $(document).on("submit", '#new_comment', function(e) {
        e.preventDefault();
        var values = $(this).serialize();
        var posting = $.post("/comments.js", values);
    });
}

function toggleComments() {
  $(document).on("click",'#comments-toggle', function(e){
    e.preventDefault();
    $("#comments").fadeToggle("slow");
  });
}
