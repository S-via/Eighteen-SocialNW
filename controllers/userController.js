// require models User & Though from models folder
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
                { _id: req.params.userId }
                    .populate('thoughts')
                    .populate('users')
            )
            if (!user) {
                return res.status(404).json({ message: 'no user found' })
            }
            res.json(user);
        } catch {
            res.status(500).json(err);
        }
    },
    // post new user
    async createNewUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch {
            res.status(500).json(err);
        }
    },

    // update user by _id 
    async updateUser(req, res) {
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

    // delete user by _id
    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete(
                { _id: req.params.userId }
            )
            if (!deleteUser) {
                res.status(404).json({ message: 'no user found' })

            }
            res.json(deleteUser);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //// /api/users/:userId/friends/friendId ////

    // post add new friend to users friend list
    async addNewFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body } },
                { runValidators: true }
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

    // delete remove friend from user's friend list 
    async deleteFriend(req, res) {
        try {
            const deletedFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: { friendsId: req.params.friendsId } } },
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
