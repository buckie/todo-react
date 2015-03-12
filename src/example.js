
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Comment List
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Comment Form
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
