Dots Forum

Motivation

 

Partnering with Dots Forum, which is a student start-up company based in Beijing, China, we aim to build a powerful online web application for the forum. We aspire to connect students from prestigious universities in China to promising Start-up companies and provide them with the most updated industry information. Dots Forum will serve multiple stakeholders and we will build its web application to facilitate the transmission of information. 

 

Our web application will provide venture capital with the information of promising startup companies; provide students and school alumni with social networking channels with industry experts and provide start-up companies with recruiting channels in top universities.

 

 

Aim

 

Our mission is to make an web application which include an online forum to share information that would facilitate the bonding and communication among students, alumnus and start-up companies of the related schools. 

 

The bonding will be facilitated by both online and offline channels. Our web application will serve as the online channel and the physical Dots Forum (planned to take place in July annually) will serve as the offline channel. The online forum will complement and disseminate information about the physical forum to ensure a large publicity outreach. 

 

Our application may also serve as a platform to gather question, feedback and advice from users as well as industrial experts if we are able to build and maintain these features.

 

 

User Stories

  

1.As a student who has insufficient information on employment opportunities especially in start-up companies, I want to be able to look at the good questions and answers and be aware of possible internships.

 

2.As a student who is seeking employment, I want to be able to connect with alumnus and start-ups through the forum by asking questions and communicating with them.

 

3.As an alumni, I want to be able to see what the startups are doing and gain insights on current trends, be it technological or business-related evolvements.

 

4.As a employee in a startup company, I want to be able to connect with students and alumnus who has an interest to cooperate or join our company.

 

5.As a venture capital associate, I would like to see which start-up companies are attracting the most number of top university graduates as it is a sign of good ability to generate quality products in demand.

 

 

 

Scope of the Project



A Web-based forum, with token-based authentication, that will provide question-and-answer functionality and allow for posting of information including recruitment information. 

An About Page that introduce to users the basic functionality of our application and inform them of our mission and vision. An Promotion Page that inform the users of the offline forum and recruitment. 

A Contact Page listing all our partner companies/universities including all industries so that our users will be able to contact their interested companies. 

Front end design, UI interaction improvement and tidying up. 

 

 

As of 29th May : Completed and tested login and registration functions, using Node.js + MySQL. These changes can be reflected in mydb (our test database built with MySQL). Our lastly progress is on branch 'loginfrontend', whereas login_branch1 contains only backend development.

 

------------------------------------------------------------------------------ The above Progress is achieved by Milestone 1 --------------------------------------------------------------------------------------

 

 

As of 9th June : Switched from MySQL  database to MongoDB Atlas (cloud server) and configured the databease ,  using Node.js + HTML to build the rest of the app . MongoDB is chosen baceuse is it a type of NoSQL. NoSQL databases performs better as it is able to support forum functions such as create posts at a higher rate. 

 

As of 11th June : Successfully trasnferred the Login and SignUp functionalists to the new app and built user Home page. From this point onwards, all our Milestone 1 achievemnts has been transferred to our new application based on MongoDB, Node.js, JavaScript, CSS  and HTML.

 

As of 14th June :  Successfully constructed the Forum page, Post and Comment functionality. Users can now create posts and replies. Also, tests are conducted to ensure the post and comments' contents can be reflected in the database. 

 

As of 16th June : Successfully constructed the About page to introduce to users the people and story behind Dots Forum and our vision. 

 

As of 17th June : Successfully constructed the Contact page to enable insterested parties/individuals to reach the partner schools.

 

As of 18th June : Successfully constructed the Promotion page to publicise the physical Dots Forum and to encourage more people to join.

 

As of 20th June : Created the edit profile function to allow users to edit credentials and their personal introduction. Solved some minor bugs and layout issues related to the navigation bar, side bar and base bar.

 

As of 24th June : Instantiation of the Forum page. Constructed a list for users to view all questions asked and added search operations to enable users to search for their interested topics. The search bar is added to the page, however, the search functionality is under develop.

 

As of 29 June: In the progress of developing the functions that we wish to implement in July: 1. allow for edit and delete posts in case user wish to do so for personal reasons; 2. one-to-many relationship between a post and many replies, instead of independent relationship between posts and replies.

 

Problems Encounted 

 

1. We were not able to connect to MongoDB Atlas for quite some time and could not find the problem. The error is one of connection failure and despite we tried different ways such as connecting through Mongoose and Mongo Shell. After extensive searching, we found that the error is due to the embedded firewall property of the nusstu Wi-Fi, and resolved the problem by connecting to another data source (Wireless @ SG).

 

2. During the transfer of MySQL to MongoDB, as we were unfamiliar with the cloud server, we were not able to build our server and obtain the correct URL. We resolved this isses by learning about mongoDB using online resources and then built our cluster and database.

 

3. During the construction and instantiation of the functionality of the Forum page, we faced bugs such as not being able to see a comment posted and not being able to go to the correct pages (Promotion, About etc) . We debugged our app by carefully reviewing the controllers and routes and make necessary changes to fix the bugs.

 

 

 

Proposed Level of Achievement : Apolo 11

 

 

Setting up of Dots Forum’s web application :

 

 

Clone the repo in this link https://github.com/WM71811/orbital.git
Install Node.js 
RUN “npm install” in termial
RUN “node app.js” to start the server, ensure not using “NUS_STU” wifi (Wireless@SG is ok)
Navigate to localhost:3000 to try out our prototype 
