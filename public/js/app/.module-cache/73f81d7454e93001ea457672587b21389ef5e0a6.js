
var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    return (
      React.createElement("div", {className: "CommentList"}, 
        "Comment List"
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement("div", {className: "CommentForm"}, 
                "Comment Form"
            )
        );
    }
});

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
