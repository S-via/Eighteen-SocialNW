// import paths 
const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username:
        {
            type: String,
            unique: true,
            requiered: true,
            trim: true
        },
        email:
        {
            type: String,
            requiered: true,
            unique: true,
            // must match a valid email
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ],
    },
    {
        toJSON:
        {
            virtuals: true,
        },
        id: false,
    }

);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

/* 
email: {
string 
requiered
unique
Must match a valid email address 
(look into Mongoose's matching validation)
}  */

module.exports = User;