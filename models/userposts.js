const mongoose = require('mongoose');

const userpostsSchema = mongoose.Schema(
    {
        "title"  : String,
        "name" : String,
        "postcontent":String,
        "posttype":String,
        "comment" : Array,
        "date": { type: Date, default: Date.now },
        "isSolved":Boolean
    }
);
mongoose.model('userposts', userpostsSchema);