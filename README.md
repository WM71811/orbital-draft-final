Dots Forum 

Setting up of Dots Forum’s web application :

1. Clone the repo in this link https://github.com/WM71811/orbital.git 

2. Install Node.js RUN “npm install” in termial RUN “node app.js” to start the server, ensure not using “NUS_STU” wifi (Wireless@SG is ok).

3. Navigate to localhost:3000 to try out our prototype

 

 

Team Name:

 

 DotsTech

 

 

Proposed Level of Achievement:

  

Apollo 11

 

A web application that facilitates communication during Dots Forums.



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




 

 

 

Scope of Project

 

A Web-based forum, with token-based authentication, that will provide question-and-answer functionality and allow for posting of information including recruitment information. 

 

An About Page that introduce to users the basic functionality of our application and inform them of our mission and vision. An Promotion Page that inform the users of the offline forum and recruitment. 

 

A Contact Page listing all our partner companies/universities including all industries so that our users will be able to contact their interested companies. Users identified as "company" can add contacts in the contact page.

 

Front end design and UI interaction improvement. 

 

 

 

Core Features

 

- Features completed in Milestone 1

     1. Login/Sign Up

         Users can register with their email account and set up their username and password. The "introduction" field will require them to fill in whether they are of type "student" or "company." Only users identified as "company" can add contacts in the contact page, while users identified as "students" cannot. Users who does not repeat password correctly, or fill in repeated email addresses that have been registered will receive an error and need to go back to the previous page to try again.

[pic]

         Users completed registration are logged in automatically. For users who need to log in after registrating an account previously, they can log in by clicking the "log in" button in the top bar and fill in their email address and password.

[]

     2. Edit User Profile

          Users can edit their user profile by changing their email address, name and password. Due to authentication process, they need to input a different email address each time.

[]

 

- Features completed in Milestone 2

     3. Create, show post and comment

          Users can create new posts and comments after logging in. After logging in, the top bar will have a "ask a question" button, by clicking which, they can fill in the form to create a new post. Comments can be created after clicking an individual post in the index page, and then scroll down the individual post page to add a comment.

[]

     4. About Page

         The About page introduces to users the people and story behind Dots Forum and our vision. It can be accessed by clicking the "About" button in the top bar.

[]

     5. Contact Page

          The Contact page enables insterested parties/individuals to reach the partner schools.

[]

     6. Promotion Page

           The Promotion page publicise the physical Dots Forum and to encourage more people to join.

[]

     7. Home Page

           The home page allows the users to see all the posts and they are able to click into each post to check the post content and comments.

[]

 

- Features completed in Milestone 3

     8. Delete, edit post and delete comment

            The users can edit or delete a post after entering an individuak post page, which is the page shown after clicking the name of a specific post in the home page. The edit button redirects users to the page to edit the post, while the delete button allows the user to delete a post. The comments can also be deleted by clicking the delete button.

            This is necessary as it ensures that users are able to edit posts to better suit their needs and delete them if they would like to.

[]

     9. Showing only comments related to a single post in the individual post page

            This is done by implementing the one-to-many relationship between post and comments. This makes sure that comments created in a particular post page are only shown in that post page, but not in other post pages.

            This is necessary as it allows for better communication between users who questioned and users who answered the question, since they could know which user is answering which post.

[]

     10. Search posts function

            The search bar allows users to search the titles of the posts. If users input "1", for example, then if the title of the posts are "1", "13", "2", then the search result would be "1" and "13". This is done by implementing regex. The search results can be clicked to be redirected to the individual post pages.

            This is necessary as when the number of posts is large, searching allows for efficiency in finding the posts that users have interests in.

 

[]

     11. Ability to add contacts by part of the users only

            The contacts can be added by users who are identified as "company", but not those who are identified as "student". This ensures that only the users belonging to certain companies can edit the contact page. The contacts can be added by clicking the "add a contact" button which redirects the users to a form to add a new contact. 

[]

 

     12. Show and delete contacts

             The contact page shows all the contacts added. The added contacts can be clicked, which redirects users to individual contact pages to see more information, in which page users can also delete the contact.

 

     13. Ask Organizers function

             The ask organizers function allows users to ask organizers in case they have any questions. They can click the button at the side bar which redirects them to a new form page, and the questions they submitted will be addressed by the organizers later.

 

 

Problems Encounted 

 

We were not able to connect to MongoDB Atlas for quite some time and could not find the problem. The error is one of connection failure and despite we tried different ways such as connecting through Mongoose and Mongo Shell. After extensive searching, we found that the error is due to the embedded firewall property of the nusstu Wi-Fi, and resolved the problem by connecting to another data source (Wireless @ SG).
 

During the transfer of MySQL to MongoDB, as we were unfamiliar with the cloud server, we were not able to build our server and obtain the correct URL. We resolved this isses by learning about mongoDB using online resources and then built our cluster and database.
 

During the construction and instantiation of double CRUD functionality of the Forum page, we faced bugs such as not being able to see a comment posted and not being able to go to the correct pages (Promotion, About etc) . We debugged our app by carefully reviewing the controllers and routes and make necessary changes to fix the bugs.
 

 

 

