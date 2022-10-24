

const router = require('express').Router();
const { 
    getAllUser,
    createUser 
} = require('../../controller/user-controller')


router.route('/').get(getAllUser).post(createUser);


module.exports = router;
