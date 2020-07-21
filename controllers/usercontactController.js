var mongoose = require('mongoose');
var Contact = mongoose.model('usercontact');
var User = require('../models/user');


//this is a function to create post by logged in user
var createContact = function(req,res){
    User.findById(req.session.userId)
        .exec(function (error, user) {
        if (user.introduction == "company") {
    var contact = new Contact({
        "title":req.body.title,
        "name":user.username,
        "content":req.body.content
    });

        contact.save(function(err,users){
            if(!err){
                Contact.find((err, users) => {
                    if (err) {
                        res.sendStatus(500);
                    } else {
                        res.redirect('/contact');
                    }
                });
            }else{
                res.sendStatus(400);
            }
        });
        }

        else {
        res.render("additionfailure")}
        });

}

// enter create post page
var showCreateContactPage =function(req, res)  {
    res.render('newcontact');
}

var getContactById = function(req,res){
    var indx = req.params.id;
    Contact.findById(indx,function(err,users){
            res.render( 'singlecontact', {
                addedcontact:users,
            });
    });
}



var deleteContact = (req, res) => {
  Contact.findByIdAndRemove(req.params.id)
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found ",
        });
      }
      //res.send({ message: "Post deleted successfully!" });
      res.render("deletionsuccess");
    })
    .catch((err) => {

      return res.status(500).send({
        message: "Could not delete post ",
      });
    });
};


module.exports.createContact = createContact;
module.exports.showCreateContactPage = showCreateContactPage;
//module.exports.update = update;
module.exports.deleteContact = deleteContact;
module.exports.getContactById = getContactById;