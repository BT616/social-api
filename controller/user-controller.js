const {User} = require('../models')

const userController = {

 
    createUser({body},res){
        User.create(body)
        .then((userData)=> 
            res.json(userData))
        .catch((err) => 
       res.status(400).json(err))
    },
    getAllUser(req, res){
        User.find({})
         .populate({path: ' thought', select: '-__v'})
         .populate({ path: 'friends', select: '-__v'})
         .select('-__v')
         .then(userData => res.json(userData))
         .catch(err => {
            console.log(err, "controller");
            res.status(500).json(err);
         })

    },
   
};

module.exports = userController;