class Link{
  constructor(attributes){
  this.id = attributes.id
  this.title = attributes.title;
  this.user_id = attributes.user_id;
  this.url = attributes.url;
  this.owner = attributes.owner;
}

  render() {
    var html = `
      <div class="link_title">
        <h2>${this.title}</h2>
      </div>
        <a target="_blank" class="btn btn-secondary btn-sm" href="${this.url}">Visit URL</a>
        <br>
        <span id="comments-toggle">Comments</span>
        <div id="comments"></div>
        <input type="hidden" value="${this.id}" name="comment[link_id]" id="comment_link_id" />
    `;
    return html;
  }

}
