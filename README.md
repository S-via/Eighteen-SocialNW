# Eighteen-SocialNW
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


# Installation
Run npm i<br>
run mongod <br>
run npm run dev<br> 
connected to PORT in insomia<br>
localhost:3001/api/

## Demo 
The following animation shows the examples of the API routes tested in Insomnia.

### Running server
Demo of starting database then running server <br>

![serverstart](/images/server.png)
<a href= "https://youtu.be/Ny_X4qq68IY">
--> LINK HERE </a>

### GET users & thoughts
The following shows<br>
a GET request for users using<br>
localhost:3001/api/users

And a GET request for thoughts using<br> 
localhost:3001/api/thoughts
![getusers](/images/getuser.png) <br>
![getthoughts](/images/getthoughts.png)
<a href = "https://youtu.be/T4vKb0kG2jM">--> LINK HERE </a>

### GET users & thougths by Id 
The following shows<br>
a GET request for users and its Id<br>
* in this case we used the id associated with username: "silvia"<br>
localhost:3001/api/users/ id (goes in here)

The following shows<br>
a GET request for thoughts and its Id<br>
* in this case we used the id associated with username: "silviaone"<br>
localhost:3001/api/thoughts/ id (goes in here)<br>
![getidusers](/images/getusersid.png)<br>
![getidthoughts](/images/getthoughtsid.png)<br>
<a href = "https://youtu.be/fGc7K2JH5Z4"> --> LINK HERE </a>


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
![postusers](/images/postusers.png)
![putusers](/images/putusers.png)
![deleteusers](/images/deleteusers.png)
<a href = "https://youtu.be/_aIzSPi6BCI"> --> LINK GOES HERE </a>

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
![postthoughts](/images/postthoughts.png)
![puthoughts](/images/putthoughts.png)
![deletethoughts](/images/deletethoughts.png)
<a href = "https://youtu.be/2LBTHNtXjPM"> --> LINK GOES HERE </a>

### POST & DELETE FOR USERS FRIENDS
The following shows<br>
a POST request for users friends list by that we pass users Id after users route then pass friends route / with friends Id<br>
When this is done we add a friend into users friend list <br>

Which after a DELETE request is submitted using the same id in routes<br>
localhost:3001/api/users/ (users Id goes here)/friends/ (friends Id)<br>
![postusersfriends](/images/post-users-friends.png)
![deleteusersfriends](/images/delete-users-frinds.png)
<a href = "https://youtu.be/V6VfhUKuwmI"> --> LINK GOES HERE </a>

### POST & DELETE THOUGHTS / REACTION
For a POST request for a reaction using a thoughts Id we create and instant POST using the following route 
localhost:3001/api/thoughts/ (thoughts Id goes here)/reactions/ 
![postreactionsthoughts](/images/postthoughtsidreactions.png)
![postdeletereactionsthoughts](/images/deletethoughtsid.png)
<a href = "https://youtu.be/bTABzoJkBAA">
<a href = "https://youtu.be/yufE-Gibn4s">
--> LINK GOES HERE
