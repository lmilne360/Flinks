class Link{
  constructor(attributes){
  this.id = attributes.id
  this.title = attributes.title;
  this.user_id = attributes.user_id;
  this.url = attributes.url;
  this.owner = attributes.owner;
  this.time = attributes.created_at;
  this.all_tags = attributes.all_tags
}

  render() {
    let creation = new Date(this.time).toLocaleString();
    var html = `
      <div class="link_title">
        <h2>${this.title}</h2>
      </div>
        <small>Submitted by ${this.owner} on ${creation}</small> <br>
        tags: ${this.all_tags} <br>
        <a target="_blank" class="btn btn-secondary btn-sm" href="${this.url}">Visit URL</a>
        <br>
        <span id="comments-toggle">Comments</span>
        <div id="comments"></div>
        <input type="hidden" value="${this.id}" name="comment[link_id]" id="comment_link_id" />
    `;
    return html;
  }

}
