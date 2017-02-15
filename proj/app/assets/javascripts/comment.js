class Comment {
  constructor(attributes){
  this.body = attributes.body;
  this.user_id = attributes.user_id;
  this.commenter = attributes.commenter;
}

  render() {
    var html = `<div class="comment">
  		<p class="lead">${this.body}
  			<small>Submitted by
  				<a href="/users/${this.user_id}">${this.commenter}</a>
  			</small>
  		</p>
  	</div>`;
    return html;
  }

}
