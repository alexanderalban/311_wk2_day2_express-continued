const comments = require('../data/comments');

const list = ('/comments/', function (req, res) {
    res.json(comments)
});

const show = ('/comments/:id', function (req, res) {
    const commentsID = req.params.id;
    for (let comment of comments) {
    if (comment._id === parseInt(commentsID)) {
        res.json(comment)
    }
    }
});

const create = ('/comments/', (req, res) => {
    const newComment = {
      _id: comments.length + 1,
      body: req.body.body,
      postId: 1,
    };

    comments.push(newComment);
    res.json(comments)
  });

  module.exports = {
      list,
      show,
      create
  }