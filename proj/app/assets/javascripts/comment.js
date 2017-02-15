class Comment {
  constructor(attributes){
  this.id = attributes.id
  this.body = attributes.body;
  this.user_id = attributes.user_id;
  this.commenter = attributes.commenter;
}

  render() {
    var html = `<div class="comment">
  		<p class="lead">${this.body}
  			<small>Submitted by
  				<a href="/users/${this.user_id}">${this.commenter}</a>
          <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/comments/${this.id}">Delete</a>
  			</small>
  		</p>
  	</div>`;
    return html;
  }

}
