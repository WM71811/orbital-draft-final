const mongoose = require("mongoose");

//copy from CONNECT (MongoDB Atlas)
const dbURI =
    "mongodb+srv://user:138679@cluster0-eukgq.mongodb.net/test?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    dbName: "test"
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

require('./userposts.js');
require('./usercontact.js');
