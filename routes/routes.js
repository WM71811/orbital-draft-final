var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');
var userController = require('../controllers/userController.js');
var userpostsController = require('../controllers/userpostsController.js');
var commentController = require('../controllers/commentController.js');
var usercontactController = require('../controllers/usercontactController.js');

//GET route show login page
router.get('/login',userController.userLoginPage);

//GET route show register page
router.get('/register', userController.userRegisterPage);

//POST route register page
router.post('/register', userController.passwordCheck);

//POST route for user login
router.post('/login',userController.passwordCheck);

//GET route for checking my profile
router.get('/loggedin/profile',userController.getProfilePage);

//POST route for editing profile
router.post('/loggedin/profile',userController.editProfilePage);

//GET route for logout logout
router.get('/logout', userController.userLogOut);

//GET route for get specific user post page
router.get('/post/:id',userController.getUserPostById);

//POST route for create comment
router.post('/post/:id/createcomment',commentController.createComment);

//GET route for deleting comment
router.get('/post/:id/deletecomment',commentController.deleteComment);

//GET route for post feedback page
router.get('/post/postfeedback',controller.postFeedback);

//GET route for home page after logged in
router.get('/loggedin',controller.LoggedinHomePage);


//DELETE route to delete post
router.get('/post/:id/delete', userController.deletePost);

//GET route for home page
router.get('/',controller.homePage);

//GET route for show create post page
router.get('/loggedin/createpost', userpostsController.showCreatePostPage);

//POST route for Create new post
router.post('/loggedin/createpost',userpostsController.createPost);

//GET route for show all posts in home page
router.get('/showpost',controller.showIndex);

//POST route to edit post
router.post('/post/:id/edit', userController.update);//update?

//GET route to show edit page
router.get('/post/:id/edit', userController.showEditPostPage);


//GET route for show ask for organizers page
router.get('/askorganizer',controller.askExpert);

router.post('/askorganizer',controller.sendFeedback);

//GET route for show searchresult
router.get('/search',controller.search);

//GET route for show contact page
router.get('/contact',controller.contact);

//GET route to show create contact page
router.get('/loggedin/createcontact', usercontactController.showCreateContactPage);

//POST route for input new contact info
router.post('/loggedin/createcontact',usercontactController.createContact);

router.get('/contact/:id',usercontactController.getContactById);

router.get('/contact/:id/delete', usercontactController.deleteContact);


//GET route for show promotion page
router.get('/promotion',controller.promotion);

//GET route for show about page
router.get('/about',controller.about);


module.exports = router; 



