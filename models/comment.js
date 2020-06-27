const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
    {
        "username" : String,
        "content"  : String,
        "created"  : Date,
    }
);

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;

