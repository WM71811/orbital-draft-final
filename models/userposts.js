const mongoose = require('mongoose');

const userpostsSchema = mongoose.Schema(
    {
        "title"  : String,
        "name" : String,
        "postcontent":String,
        "posttype":String,
        "comment" : Array,
        "date": { type: Date, default: Date.now },
        "isSolved":Boolean,
        "userid" : String
    }
);
userpostsSchema.index( { title: "text" } );
mongoose.model('userposts', userpostsSchema);