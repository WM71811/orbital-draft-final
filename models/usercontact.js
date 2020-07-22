const mongoose = require('mongoose');

const usercontactSchema = mongoose.Schema(

    {
        "title"  : String,
        "name" : String,
        "content":String,
        "posttype":String,
        "userid" :String,
        "date": { type: Date, default: Date.now }

    }

);

mongoose.model('usercontact', usercontactSchema);