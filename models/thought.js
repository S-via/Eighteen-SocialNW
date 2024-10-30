// import paths 

/* 
thoughtText:{
string
requiered
Must be 1-280 characters 
},

createdAt:{
date
Set default value to the current timestamp
Use a getter method to format the timestamp on query
},

username:{
string
required
},

reactions:{ 
(reactionSchema)
}
*/

// CREATE A VIRTUAL CALLED reactionCount that retrives the length
// thought's reactions array field on the query 

/* Will be used as the reaction field 
subdocument schema in the Thoughts
 import  */

const reactionSchema = new Schema({
    reactionId:{

    },
    reactionBody:{

    },
    username:{

    },
    createdAt:{

    }
}) 
