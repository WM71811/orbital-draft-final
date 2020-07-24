var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');


//set up view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Database setup
require('./models/db.js');

// var session = require('express-session');
var FileStore = require('session-file-store')(session);
var identityKey = 'skey';

//use sessions for tracking logins
app.use(session({
    name: identityKey,
    secret: 'asdfg',
    store: new FileStore(),
    saveUninitialized: false,
    resave: false,
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
var routes = require('./routes/routes.js');
app.use('/', routes);
/*
// catch 404 and forward to error handler
app.use(function (req, res, next) {
//console.log(req.params);
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.send(err.message);
});*/

const PORT = process.env.PORT || 3000;
// listen on port 3000
app.listen(PORT, function () {
  console.log('Express app listening on port 3000');
});