// import model 

const { Thought } = require("../models")

module.exports = {

    //// /api/thoughts ////

    // GET all thoughts 
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find({})
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET single thought by _id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne(
                { _id: req.params.thoughtId }
            )
            if (!thought) {
                return res.status(404).json({ message: 'no thought found by that id' })
            }

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // POST  create new thought (push the created thought's _id to the associated user's thoughts array field)
    async createNewThought(req, res) { },

    // PUT update a thought by _id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                {
                    runValidators: true,
                    new: true,
                }
            )
            if (!thought) {
                return res.status(404).json({ message: 'no thought found by that id' })
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // DELETE remove thought by _id
    async removeThought(req, res) {
        try {
            const deleteThought = await User.findOneAndDelete(
                { _id: req.params.thoughtId}
            )
            if (!deleteThought) {
                res.status(404).json({ message: 'no user found' })

            }
            res.json(deleteThought);
        } catch (err) {
            res.status(500).json(err)
        }
     },


    //// /api/thoughts/thoughtId/reactions /////

    // POST create a reaction stored in a single thought's reactions array field
    async createReaction(req, res) { },
    
    // DELETE  to pull and remove a reaction by the reaction's reactionId value
    async removeReaction(req, res) { },
}