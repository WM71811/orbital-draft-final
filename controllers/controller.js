var mongoose = require('mongoose');
var Post = mongoose.model('userposts');
var User = require('../models/user');


//show homepage after logged in
var LoggedinHomePage = function(req,res){
    var postInx = req.params.id;
    User.findById(postInx,function(err,users){
        Post.find((err, users) => {
            if (err) {
                res.sendStatus(500);
            } else {
                // res.send(users);
                res.render('indexloggedin', {
                    addedpost: users,
                    userlist : users,
                });
            }
        });
    });
}

// show home page
var homePage = function(req,res){
    Post.find((err, users) => {
        if (err) {
            res.sendStatus(500);
        } else {
            // res.send(users);
            res.render('index', {
                addedpost: users,
            });
        }
    });
}


// show home page
var showIndex = function (req,res) {
        Post.find((err, users) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.render('index', {
                    addedpost: users,
                });
            }
        });
}

var showEditPostPage =function(req, res)  {
Post.find((err, users) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.render('editpost', {
                    addedpost: users,
                });
            }
        });
}

// find all user posts
var findAllPosts = function(req,res){
    Post.find(function(err,posts){
        if(!err){
            res.send(posts);
        }else{
            res.sendStatus(404);
        }
    });
};

//render askexpert page
var askExpert = function (req,res) {
    res.render('askexpert');

}

//render search result page
var search= function (req,res) {
    res.render('searchpage');
}

//render postfeedback page
var postFeedback= function (req,res) {
    res.render('postfeedback');
}

//render contact page
var contact= function (req,res) {
    res.render('contact');
}

//render promotion page
var promotion= function (req,res) {
    res.render('promotion');
}

//render about page
var about= function (req,res) {
    res.render('about');
}







module.exports.postFeedback = postFeedback;
module.exports.LoggedinHomePage = LoggedinHomePage;
module.exports.homePage = homePage;
module.exports.findAllPosts = findAllPosts;
module.exports.showIndex = showIndex;
module.exports.askExpert = askExpert;
module.exports.search = search;
module.exports.about = about;
module.exports.promotion = promotion;
module.exports.contact = contact;
module.exports.showEditPostPage = showEditPostPage;

