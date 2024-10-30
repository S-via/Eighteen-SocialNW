// import paths 

/* 
username:{ 
string
unique 
requiered
trimmed  
},

email: {
string 
requiered
unique
Must match a valid email address 
(look into Mongoose's matching validation)
}

thoughts:{
Array of _id vlaues refrencing the Thought model
},

friends:{
Array of _id values refrencing the User model (self-refrence)
}
*/



/* Schema Settings:

Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
 */