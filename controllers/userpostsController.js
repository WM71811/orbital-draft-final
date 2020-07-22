var mongoose = require('mongoose');
var Post = mongoose.model('userposts');
var User = require('../models/user');


//this is a function to create post by logged in user
var createPost = function(req,res){
if (req.session.userId) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
    var post = new Post({
        "title":req.body.title,
        "name":user.username,
        "postcontent":req.body.postcontent,
        "userid":req.session.userId,
    });

        post.save(function(err,users){
            if(!err){
                Post.find((err, users) => {
                    if (err) {
                        res.sendStatus(500);
                    } else {
                        res.redirect('/loggedin')
                    }
                });
            }else{
                res.sendStatus(400);
            }
        });
        });
}
else {
res.render("notloggedin");
}
}


// enter create post page
var showCreatePostPage =function(req, res)  {
    res.render('newpost');
}

// Update a post by the id in the request
/*function(req,res){
console.log(req.params.id);
console.log(req.session.userId);
}*/
/*
                 User.findById(req.session.userId)
                     .exec(function (error, user) {
                 var post = Post.findByIdAndUpdate({
                     "title":req.body.title,
                     "name":user.username,
                     "postcontent":req.body.postcontent,
                 });

                     post.save(function(err,users){
                         if(!err){
                             Post.find((err, users) => {
                                 if (err) {
                                     res.sendStatus(500);
                                 } else {
                                     res.redirect('/index')
                                 }
                             });
                         }else{
                             res.sendStatus(400);
                         }
                     });
                     });
             };*/


 /* if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }*/
/*var update = function(req, res) {

      User.findById(req.session.userId)
          .exec(function (error, user) {
      var post = new Post({
          "title":req.body.title,
          "name":user.username,
          "postcontent":req.body.postcontent,
      });


  const id = req.params.id;

  post.findByIdAndUpdate(id, post, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update post with id=${id}. Maybe post was not found!`
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Post with id=" + id
      });
    });
});
};

var deletePost = (req, res) => {
console.log(req.params);
  Post.findByIdAndRemove(req.params.id)
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found ",
        });
      }
      res.send({ message: "Post deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete post ",
      });
    });
};*/

/*// enter create edit page
var showEditPostPage =function(req, res)  {
console.log("cannot find editpost");
    res.render('editpost');
}
*/
/*var helloWorld = function(req, res) {
console.log("test");
res.send('Got a DELETE request');
}*/

module.exports.createPost = createPost;
module.exports.showCreatePostPage = showCreatePostPage;
/*module.exports.update = update;
module.exports.deletePost = deletePost;
module.exports.helloWorld = helloWorld;*/
//module.exports.showEditPostPage=showEditPostPage;