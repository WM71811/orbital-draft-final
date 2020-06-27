# BabyCaring: a forum about taking care of babies: https://babycaring.herokuapp.com/


![Image text](https://github.com/jingsy/Nodejs-/blob/master/img-folder/appjs.png)


## Description of core functionalities:

### Function 1:
Login to the website. Enter your username and password if you have registered accounts

#### URL: https://babycaring.herokuapp.com/login
#### View: login.ejs
#### route: /login
#### controller: Controller
#### model: userSchema

### Function 2:
Sign up for the website. Create your new account.

#### URL: https://babycaring.herokuapp.com/register  
#### View: register.ejs
#### route: /register
#### controller: Controller
#### model: userSchema

### Function 3:
Editing your profile: you can update your username and password here

#### URL: https://babycaring.herokuapp.com/loggedin/profile
#### View: profile.ejs
#### route: /loggedin/profile
#### controller: userController
#### model: userSchema

### Function 4:
Asking question about babies: you can post your questions here. 

#### URL: https://babycaring.herokuapp.com/loggedin/createpost
#### View: newpost.ejs
#### route: /loggedin/createpost
#### controller: userpostsController
#### model: userpostsSchema

### Function 5:
Making reply to other user's questions

#### URL: https://babycaring.herokuapp.com/post/5cf0ba6dbf3f6d7d3ac4e166
#### View: single.ejs
#### route: /post/:id
#### controller: userpostsController
#### model: userpostsSchema

### Function 6:
Consulting a certified expert

#### URL: https://babycaring.herokuapp.com/askexpert
#### View: askexpert.ejs
#### route: /askexpert
#### controller: userpostsController
#### model: userpostsSchema

### Function 7:
Searching for desired questions and answers by keywords (unfinished)

### Function 8:
Browsing contents according to topics (unfinished)

### Function 9:
Categorizing questions into solved and unsolved (unfinished)


