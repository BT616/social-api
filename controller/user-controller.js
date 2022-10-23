const {User} = require('../models')

const userController = {

    getUsers(req, res){
        User.find({})
            .then((userData)=> {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err, " user-controller line 11 ")
           res.status(500).json(err)
            })

    },
    
    createUser(req,res){
        User.create(req.body)
        .then((userData)=> {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err, " user-controller line 23 ")
       res.status(500).json(err)

        })
    }
};

module.exports = userController;