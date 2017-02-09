$(function() {

    $('.link').each(function(index){
      if (localStorage['favourite' + index] == 'fave') {
        $(this).addClass('fave');
      }
    });

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
    var item = $(this).parent().closest('div');
    var index = $('.link').index(item);
    item.toggleClass('fave');
    if (item.hasClass('fave')) {
      localStorage.setItem('favourite' + index, 'fave');
    } else {
      localStorage.removeItem('favourite' + index);
    }

  });
}
