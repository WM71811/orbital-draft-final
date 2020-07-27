var Comment = require('../models/comment');
var mongoose = require('mongoose');
var User = require('../models/user');
var Post = mongoose.model('userposts');

var createComment = function(req, res ){
    var comment1 = new Comment({
        "username" : req.body.username,
        "content" : req.body.content,
        "created" : Date.now()
    });
    var postId = req.params.id;
    //console.log(postId);
    //console.log(comment1._id);
    comment1.save( function( err, comments, count ){
        Post.findByIdAndUpdate(postId, {$push: {comment: comment1._id}},
        { useFindAndModify: false })
        .then(data => {
               if (!data) {
                 res.status(404).send({
                   message: `Cannot update post. Maybe post was not found!`
                 });
               } else res.render('commentsuccess');
             })
             .catch(err => {
             //console.log(err);
               res.status(500).send({
                 message: "Error updating post",
               });
             });


    });
}

var deleteComment = function(req, res) {
//console.log(req.params);
  Comment.findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then((comment) => {
      if (!comment) {
        return res.status(404).send({
          message: "Comment not found ",
        });
      }
      //res.send({ message: "Post deleted successfully!" });
      res.render("deletionsuccess");
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete comment",
      });
    });
}
module.exports.createComment = createComment;
module.exports.deleteComment = deleteComment;
