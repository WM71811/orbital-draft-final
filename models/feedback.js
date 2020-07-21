const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema(
    {
        "title"  : String,
        "name" : String,
        "postcontent":String,
        "date": Date,

    }
);

const Feedback = mongoose.model('feedback', feedbackSchema);
module.exports = Feedback;

