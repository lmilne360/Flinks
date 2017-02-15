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
        posting.done(function(data){
          console.log(data);
        });
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
    var item = $(this).parent().closest('div');
    var id = $(this).attr('btn-id');
    item.toggleClass('fave');
    if (item.hasClass('fave')) {
      localStorage.setItem('favourite' + id, 'fave');
    } else {
      localStorage.removeItem('favourite' + id);
    }

  });
}
