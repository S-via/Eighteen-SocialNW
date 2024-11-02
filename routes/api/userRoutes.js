const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createNewUser,
    updateUserId,
    deleteUserId,
    addNewFriend,
    deleteFriend

} = require('../../controllers/userController');

//// /api/users
router.route('/')
.get(getUsers)
.post(createNewUser);

//// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUserId)
.delete(deleteUserId);

//// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
.post(addNewFriend)
.delete(deleteFriend);


module.exports = router;