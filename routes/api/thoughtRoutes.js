// entry for Router 
const router = require('express').Router()

const {
    getThoughts,
    getSingleThought,
    createNewThought,
    updateThoughtId,
    removeThoughtId,
    createReaction,
    removeReaction

    
} = require('../../controllers/thoughtController');
// /api/thoughts/

router.route('/')
.get(getThoughts)
.post(createNewThought);

// /api/thoughts/thoughtId 
router.route('/:thoughtId') 
.get(getSingleThought)
.put(updateThoughtId)
.delete(removeThoughtId);

// /api/thoughts/:thoughtId/reactions 
router.route('/:thoughtId/reactions')
.post(createReaction)
.delete(removeReaction);

module.exports = router;