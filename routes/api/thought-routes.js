// get all
// get by id
// 
//
// getUserById,
// updateUser,
// deleteUser,
// addFriend,
// deleteFriend


const router = require('express').Router();
const { 
    getAllThought,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction
    ,deleteReaction
} = require('../../controller/thought-controller')


router.route('/').get(getAllThought)
router.route('/id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:userId').post(createThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;