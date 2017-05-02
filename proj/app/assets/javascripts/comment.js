class Comment {
  constructor(attributes, id){
  this.id = attributes.id
  this.body = attributes.body;
  this.user_id = attributes.user_id;
  this.commenter = attributes.commenter;
  this.current_user_id = id
}

  render() {
    var html = `<div class="comment">
  		<p class="lead">${this.body}
  			<small>Submitted by
  				<a href="/users/${this.user_id}">${this.commenter}</a>
          ${this.user_id === this.current_user_id ? '<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/comments/${this.id}">Delete</a>' : ""}
  			</small>
  		</p>
  	</div>`;
    return html;
  }

}
