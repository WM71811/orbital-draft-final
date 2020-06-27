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
    // Post.find(function(err,posts){
    Post.findById(postInx,function(err,users){
        Comment.find( function ( err, comments, count ){
            res.render( 'single', {
                comments : comments,
                addedpost:users,
            });
        });
    });
}


module.exports.getUserPostById = getUserPostById;
module.exports.userLogOut = userLogOut;
module.exports.getProfilePage = getProfilePage;
module.exports.editProfilePage = editProfilePage;
module.exports.passwordCheck = passwordCheck;
module.exports.userLoginPage = userLoginPage;
module.exports.userRegisterPage = userRegisterPage;
