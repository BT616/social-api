const { User } = require('../models')
const userController = {

    // get single user by id
    getUserById(req, res) {
        User.findById({ _id: req.params.id })
            .populate({ path: ' thought', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'no user with that id' })
                    return;
                }
                res.json(userData)
            }).catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
//updat by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'no user with that id' })
                    return;
                }
                res.json(userData);
            }).catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
//delete user 
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'no user with that id' })
                    return;
                }
                res.json(userData);
            }).catch(err => {
                console.log(err);
                res.status(400).json(err)
            })

    },

    //    
    // 
    // 
    // 
    // delete user
    deleteFriend({ params }, res) {
        User.findOneAndRemove({ _id: params.id }, { $pull: { friends: params.friendId } }, { new: true },
            console.log('You are adding a friend')
                .populate({ path: 'friends', select: '-__v' })
                .select('-__v')
                .then(userData => {
                    if (!userData) {
                        res.status(404).json({ message: 'no user with that id' })
                        return;
                    }
                    res.json(userData);
                }).catch(err => {
                    console.log(err);
                    res.status(400).json(err)

                })
        )
    },

//deletefriend
    addFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, { $push: { friends: params.friendId } }, { new: true },
            console.log('You are adding a friend')
                .populate({ path: 'friends', select: '-__v' })
                .select('-__v')
                .then(userData => {
                    if (!userData) {
                        res.status(404).json({ message: 'no user with that id' })
                        return;
                    }
                    res.json(userData);
                }).catch(err => {
                    console.log(err);
                    res.status(400).json(err)

                })
        )
    },

    //create
    createUser({ body }, res) {
        User.create(body)
            .then((userData) =>
                res.json(userData))
            .catch((err) =>
                res.status(400).json(err))
    },
    //get all
    getAllUser(req, res) {
        User.find({})
            .populate({ path: ' thought', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err, "controller");
                res.status(500).json(err);
            })

    },

};

module.exports = userController;