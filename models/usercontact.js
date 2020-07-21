const mongoose = require('mongoose');

const usercontactSchema = mongoose.Schema(

    {
        "title"  : String,
        "name" : String,
        "content":String,
        "posttype":String,
        "date": { type: Date, default: Date.now }

    }

);

mongoose.model('usercontact', usercontactSchema);