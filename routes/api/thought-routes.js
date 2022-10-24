// get all
// get by id
// post 


const router = require('express').Router();
const { 
    getAllThought,
    createThought 
} = require('../../controller/thought-controller')


router.route('/').get(getAllThought).post(createThought);


module.exports = router;