# Eighteen-SocialNW
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


# Installation
Run npm i<br>
run mongod <br>
run npm run dev<br> 
connected to PORT in insomia<br>
localhost:3001/api/

## Demo 
 the following animation shows the examples of the API routes tested in Insomnia.

### Running server
Demo of starting database then running server 
![serverstart]()
--> LINK HERE 

### GET users & thoughts
The following shows<br>
a GET request for users using<br>
localhost:3001/api/users

And a GET request for thoughts using<br> 
localhost:3001/api/thoughts
![getusersandthoughts]()
--> LINK HERE 

### GET users & thougths by Id 
The following shows<br>
a GET request for users and its Id<br>
* in this case we used the id associated with username: "silvia"<br>
localhost:3001/api/users/ id (goes in here)

The following shows<br>
a GET request for thoughts and its Id<br>
* in this case we used the id associated with username: "silviaone"<br>
localhost:3001/api/thoughts/ id (goes in here)<br>
![getiduserthought]()
--> LINK HERE 

### POST PUT DELETE FOR USERS
The following shows<br>
a POST request for users<br>
* In this case we created a new user using a json request<br> 
localhost:3001/api/users<br>

Which after a PUT request for that same user using its Id, in the
parameteres we updated users username <br>
localhost:3001/api/users/ (users Id goes here)<br>

Using the same Id we request a DELETE for that user <br>
localhost:3001/api/users/ (users Id goes here)<br>
![postputdeleteusers]()
--> LINK GOES HERE 

### POST PUT DELETE FOR THOUGHTS
The following shows<br>
a POST request for thoughts<br>
* In this case we created a new thought using a json request<br> 
localhost:3001/api/thoughts/<br>

Which after a PUT request for that same thought using its Id, in the
parameteres we updated thoughts text <br>
localhost:3001/api/thoughts/ (thoughts Id goes here)<br>

Using the same Id we request a DELETE for that thought<br>
localhost:3001/api/thoughts/ (thouhts Id goes here)<br>
![postputdeletethoughts]()
--> LINK GOES HERE 

### POST & DELETE FOR USERS FRIENDS
The following shows<br>
a POST request for users friends list by that we pass users Id after users route then pass friends route / with friends Id<br>
When this is done we add a friend into users friend list <br>

Which after a DELETE request is submitted using the same id in routes<br>
localhost:3001/api/users/ (users Id goes here)/friends/ (friends Id)<br>
![postdeleteusersfriends]()
--> LINK GOES HERE 

### POST & DELETE THOUGHTS / REACTION
For a POST request for a reaction using a thoughts Id we create and instant POST using the following route 
localhost:3001/api/thoughts/ (thoughts Id goes here)/reactions/ 
![postdeletereactionsthoughts]()
--> LINK GOES HERE