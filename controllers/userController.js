

// require models User & Though from models folder
const { User, Thought } = require('../models')

module.exports = {

    //get a user
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
    }


}
