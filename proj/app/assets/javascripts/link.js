class Link {
    constructor(attributes, id) {
        this.id = attributes.id;
        this.title = attributes.title;
        this.user_id = attributes.user_id;
        this.url = attributes.url;
        this.owner = attributes.owner;
        this.time = attributes.created_at;
        this.all_tags = attributes.all_tags;
        this.comments = attributes.comments;
        this.current_user_id = id;
    }

    render() {
        let creation = new Date(this.time).toLocaleString();
        let link = this;
        let commentHTML = "";
        this.comments.forEach(function(comment) {
            commentHTML += `<div class="comment">
    		<p class="lead">${comment.body}
    			<small>Submitted by
    				<a href="/users/${comment.user_id}">${comment.commenter}</a>
            ${comment.user_id === link.current_user_id ? '<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/comments/${this.id}">Delete</a>' : ""}
    			</small>
    		</p>
    	</div>`;
        });
        let html = `
      <div class="link_title">
        <h2>${this.title}</h2>
      </div>
        <small>Submitted by ${this.owner} on ${creation}</small> <br>
        tags: ${this.all_tags} <br>
        <a target="_blank" class="btn btn-secondary btn-sm" href="${this.url}">Visit URL</a>
        <br>
        <span id="comments-toggle">Comments</span>
        <div id="comments">${commentHTML}</div>
        <input type="hidden" value="${this.id}" name="comment[link_id]" id="comment_link_id" />
    `;
        return html;
    }

}
