

// require models User & Though from models folder
const { User, Thought } = require('../models')

module.exports = {

    async getUsers(req, res) {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

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



}
