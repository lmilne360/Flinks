$(function() {

    addComment();
    toggleComments();
    toggleFave();
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

function toggleFave() {
  $(document).on("click", ".link div.btn", function(e){
    $(this).parent().closest('div').toggleClass('fave');
  });
}
