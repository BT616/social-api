const {Thought, User} = require('../models')

const thoughtController = ({

    deleteReaction({params},res){

            Thought.findOneAndUpdate({ _id: params.thoughtId }, { $pull: {reaction:{reactionId: params.reactionId}}}, { new: true })
            .then(thoughtData => {
                if(!thoughtData){res.status(404).json({ message: 'no thought with that id' })
                return;

                }
                res.status(404).json({ message: 'no thought with that id' })
                        return;
            })
            .catch(err => { res.status(400).json(err)
            })
    },

    addReaction({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body}}, { new: true, runValidators: true })
                .populate({ path: 'reactions', select: '-__v' })
                .select('-__v')
                .then(thoughtData => {
                    if (!thoughtData) {
                        res.status(404).json({ message: 'no thought with that id' })
                        return;
                    }
                    res.status(404).json({ message: 'no thought with that id' })
                    return;

                })
                .catch(err => { res.status(400).json(err)

                })
        
    },


    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'no thoughts with that id' })
                    return;
                }
                res.json(thoughtData);
            }).catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'no thought with that id' })
                    return;
                }
                res.json(thoughtData);
            }).catch(err => {
                console.log(err);
                res.status(400).json(err)
            })

    },
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.id })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'no thought with that id' })
                    return;
                }
                res.json(thoughtData)
            }).catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
//create
    createThought({ params, body}, res) {
        Thought.create(body)
            .then(({_id}) =>{
               return User.findOneAndUpdate({_id: params.userId}, {$push: {thoughts: _id}}, {new: true})})
    .then(thoughtData =>{
        if(!thoughtData){
            res.status(404).json({message: 'no thoughts here'})
            return;
        }
        res.json(thoughtData)
    })
    .catch(err => res.json(err));
},
    //get all
    getAllThought(req, res) {
        Thought.find({})
            .populate({ path: 'reations', select: '-__v' })
            .select('-__v')
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err, "controller");
                res.status(500).json(err);
            })

    },

});

module.exports = thoughtController;