var mongoose = require('mongoose');
var Post = mongoose.model('userposts');
var User = require('../models/user');
var Feedback = require('../models/feedback');
var Contact = mongoose.model('usercontact');


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

var sendFeedback = function (req, res) {
    var feedback1 = new Feedback({
            "title"  : req.body.title,
            "name" : req.body.name,
            "postcontent":req.body.postcontent,
            "date": Date.now()
            });

     feedback1.save(function( err, feedbacks, count ){
                           res.render('postfeedback');
                       });
}

//render search result page
var search= function (req,res) {
                //console.log(req.query.s);
     Post.find( {title: {'$regex': req.query.s, '$options': 'i' }} , (err, users) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                //console.log(req);
                //console.log(users);
                    res.render('searchpage', {
                        addedpost: users,
                    });
                }
            });
}

//render postfeedback page
var postFeedback= function (req,res) {
    res.render('postfeedback');
}

var commentsuccess= function (req,res) {
     res.render('commentsuccess');
 }

//render contact page
var contact= function (req,res) {
    //res.render('contact');
    Contact.find((err, users) => {
            if (err) {
                res.sendStatus(500);
            } else {
                // res.send(users);
                res.render('contact', {
                    addedcontact: users,
                });
            }
        });
}

//render promotion page
var promotion= function (req,res) {
    res.render('promotion');
}

//render about page
var about= function (req,res) {
    res.render('about');
}

var deletionSuccess = function (req,res) {
    res.render('deletionsuccess');
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
module.exports.deletionSuccess = deletionSuccess;
module.exports.commentsuccess = commentsuccess;
module.exports.sendFeedback = sendFeedback;





