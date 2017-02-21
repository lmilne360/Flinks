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
        // get template

        posting.done(function(data) {

            comment = new Comment(data);
            //Add the compiled html to pahe
            $('#comments').append(comment.render());

            //Increase comment counter
            var size = parseInt($('#comment-size').html());
            size++;
            $('#comment-size').html(size);

            //reset form submit button
            $('#new_comment input[type=submit]').attr('disabled', false);

            $('#comment_body').val('');
        });
    });
}


function toggleComments() {
    $(document).on("click", '#comments-toggle', function(e) {
        e.preventDefault();
        $("#comments").fadeToggle("slow");
    });
}

function toggleFave() {
    $(document).on("click", ".link div.btn", function(e) {
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

function nxtLink() {
    //var all_ids = $('.linkIDs').data('ids');
    let id = $('#comment_link_id').val();
    id = parseInt(id);
    let index = all_ids.indexOf(id);
    if (index >= 0 && index < all_ids.length - 1) {
        let nxtID = all_ids[index + 1];
        appendNextLink(nxtID);
    } else {
        alert("That's all folks!");
    }
}

function appendNextLink(id) {
    $.getJSON(`/links/${id}`, function(data) {
      let linkHTML = new Link(data).render();

        $('.link').html(linkHTML);
        appendComment();
    });
}

function appendComment() {
    let id = $('#comment_link_id').val();
    let current_user_id = parseInt($('.currentID').data('cid'));
    $.get('/links/' + id + '/comments', function(data) {
        $(data).each(function() {
            var comment = new Comment(this, current_user_id);
            $('#comments').append(comment.render());
        });
    });
}
