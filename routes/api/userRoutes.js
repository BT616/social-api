

const router = require('express').Router();
const { 
    getUsers,
    createUser 
} = require('../../controller/user-controller')

// //gett all 
// router.get('/', (req,res)=>{
//     User.find({}, (err, result)=>{
//         if(err){
//             res.status(500).json({message:'server error social api line 9'})
//         }
//         res.status(200).json(result);
//     });
// });

router.route('/')
.get(getUsers)
.post(createUser);


module.exports = router;
