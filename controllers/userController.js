// require models User from models folder
const { User} = require('../models')

module.exports = {
    //// api/users ////

    // get users
    async getUsers(req, res) {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get one user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne(
                { _id: req.params.userId })
                    .populate('thoughts')
                    .populate('friends')
            

            if (!user) {
                return res.status(404).json({ message: 'no user found' })
            }
            res.json(user);
        } catch (err){
            res.status(500).json(err);
        }
    },
    // post new user
    async createNewUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch(err) {
            console.error(err)
            res.status(500).json(err);
        }
    },

    // update user by _id 
    async updateUserId(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                {
                    runValidators: true,
                    new: true,
                }
            );
            if (!updateUser) {
                res.status(404).json({ message: 'no user found' })
            }
            res.json(updateUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE user by _id
    async deleteUserId(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete(
                { _id: req.params.userId }
            )
            if (!deleteUser) {
                res.status(404).json({ message: 'no user found' })

            }
            res.status(200).json({message:' user deleted'});
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //// /api/users/:userId/friends/friendId ////

    // POST add new friend to users friend list
    async addNewFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true,
                    new:true
                 }
            );

            if (!newFriend) {
                return res
                    .status(404)
                    .json({ message: 'no friend found' })
            }
            res.json(newFriend);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE remove friend from user's friend list 
    async deleteFriend(req, res) {
        try {
            const deletedFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends:req.params.friendId } },
                { runValidators: true, new: true }
            );
            if (!deletedFriend) {
                return res
                    .status(404)
                    .json({ message: 'no friend found' })
            }
            res.json(deletedFriend);

        } catch (err) {
            res.status(500).json(err);
        }
    },


};
