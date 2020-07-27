var mongoose = require('mongoose');
var User = require('../models/user');
var Post = mongoose.model('userposts');
var Comment = require('../models/comment');

//this function is to get user login page
var userLoginPage = function(req,res){
    res.render('login')
};
//this function is for user register page
var userRegisterPage = function(req,res){
    res.render('register')
};

//this function is for user password check and register
var passwordCheck =function (req, res, next) {
// confirm that user typed same password twice
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords don't match");
        return next(err);
    }

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            introduction: req.body.introduction,
        }

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                req.session.userId = user._id;
                return res.redirect('/loggedin');
            }
        });

    } else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/loggedin');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
};

//this function is for to get user profile page
var getProfilePage =  function (req, res, next) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    return res.render('profile',{
                        user:user
                    });
                }
            }
        });
}

//this function is for editing profile page
var editProfilePage =  function (req, res, next) {
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords don't match");
        return next(err);
    }

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            introduction: req.body.introduction,
        }

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                req.session.userId = user._id;
                return res.redirect('/loggedin');
            }
        });

    } else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                res.render("errorinupdating");
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/loggedin');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
};


//this function is for user log out
var userLogOut =function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
}

//this function is to enter a specific user post page
var getUserPostById = function(req,res){
    var postInx = req.params.id;
    Post.findById(postInx,function(err,users){
        Comment.find( {_id: {$in:users.comment}}, function ( err, comments, count ){
            res.render( 'single', {
                comments : comments,
                addedpost:users,
            });
        });
    });
}

var showEditPostPage =function(req, res)  {
        Post.findById(req.params.id, (err, users) => {
            if (err) {
                res.sendStatus(500);
            } else {
            //console.log(users);
                res.render('editpost', {
                addedpost: users,
                });
            }
        });
}


      /*User.findById(req.session.userId)
          .exec(function (error, user) {
      var post = new Post({
          "title":req.body.title,
          "name":user.username,
          "postcontent":req.body.postcontent,
      });*/
var update = function(req, res) {
    /*Post.findByIdAndRemove(req.params.id)
        .then((post) => {
          if (!post) {
            return res.status(404).send({
              message: "Post not found ",
            });
          }
User.findById(req.session.userId)
                .exec(function (error, user) {
            var post = new Post({
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
                            res.render('editsuccess');
                        }
                    });
                }else{
                    res.sendStatus(400);
                }
            });
            });
            })
        .catch((err) => {
          return res.status(500).send({
            message: "Could not delete post ",
          });
        });

}*/
const obj = JSON.parse(JSON.stringify(req.body));
if (req.session.userId) {
User.findById(req.session.userId)
        .exec(function (error, user) {
        Post.findOne({_id : req.params.id}).then(data =>
        { const id1 = data.userid;
 if (user._id == id1) {
 Post.findByIdAndUpdate(req.params.id, {"title":obj.title,
                "postcontent":obj.postcontent}, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update post. Maybe post was not found!`
        });
      } else res.render('editsuccess');
    })
    .catch(err => {
    //console.log(err);
      res.status(500).send({
        message: "Error updating post",
      });
    });
}
else {
        res.render('editfailure');
}
});
});
}
else {
res.render("notloggedin");
}
}

var deletePost = (req, res) => {
if (req.session.userId) {
User.findById(req.session.userId)
        .exec(function (error, user) {
        Post.findOne({_id : req.params.id}).then(data =>
        { const id1 = data.userid;
 if (user._id == id1) {
  Post.findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found ",
        });
      }
      //res.send({ message: "Post deleted successfully!" });
      res.render("deletionsuccess");
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete post ",
      });
    });
}
else {
res.render("deletionfailure");
}
});
});
}
else {
res.render("notloggedin");
}
}


module.exports.getUserPostById = getUserPostById;
module.exports.userLogOut = userLogOut;
module.exports.getProfilePage = getProfilePage;
module.exports.editProfilePage = editProfilePage;
module.exports.passwordCheck = passwordCheck;
module.exports.userLoginPage = userLoginPage;
module.exports.userRegisterPage = userRegisterPage;
module.exports.deletePost = deletePost;
module.exports.update = update;
module.exports.showEditPostPage = showEditPostPage;


