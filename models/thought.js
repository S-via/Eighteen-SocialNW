// import paths 
const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText:
        {
            type: String,
            requiered: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt:
        {
            type: Date,
            default: Date.now,
            // check twice

        },
        username:
        {
            type: String,
            requiered: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON:
        {
            virtual: true,
        },
        id: false,
        // correct convention??

    }
);

// CREATE A VIRTUAL CALLED reactionCount that retrives the length
// thought's reactions array field on the query 
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

/* Will be used as the reaction field 
subdocument schema in the Thoughts
 import  */

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.ObjectId,
        default: () => new Types.ObjectId(),
        // clarification
    },
    reactionBody: {
        type: String,
        requiered: true,
        maxLength: 280

    },
    username: {
        type: String,
        requiered: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // getter?
    }
});

const Thought = model('though', thoughtSchema)

module.exports = Thought;