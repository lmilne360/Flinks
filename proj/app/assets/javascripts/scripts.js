$(function() {

    addComment();
});


function addComment() {
  $('#new_comment').submit(function(e){
    e.preventDefault();
    console.log('It works')
  });
}






function createLink() {
    $('#new_link').submit(function(event) {
        event.preventDefault();

        var values = $(this).serialize();
        var path = $(this).attr('action') // gets the action(path) of the form

        var posting = $.post(path, values);

        posting.done(function(data){
          debugger
        });

    });
}
