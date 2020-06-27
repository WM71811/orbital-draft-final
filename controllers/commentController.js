var Comment = require('../models/comment');

var createComment = function(req, res ){
    var comment = new Comment({
        "username" : req.body.username,
        "content" : req.body.content,
        "created" : Date.now()
    });
    comment.save( function( err, comments, count ){
        res.render('postfeedback');
    });
};

module.exports.createComment = createComment;
