const {Schema, model}= require('mongoose')
const ReactionSchema = new Schema({
    reactionId: {type: Schema.Types.ObjectId, default: objectId},
reactionBody:{ type: String, required: true, maxLength: 280},
username: { type: String, required: true},
createdAt: { type: Date, default: Date.now, get: (date) => timeSince(date)}
})



const ThoughtSchema = new Schema({
thoughtText:
{
    type: String, required: true, maxLength: 280
},
createdAt:
{
    type: Date, default: Date.now, get: (date) => timeSince(date)
},

//username:[UserSchema],
username: {
    type: String,
    required: true,
},
reaction:[ ReactionSchema]
},
{
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false,
  })
ThoughtSchema.virtual('reactionCount').get(function (){
    return this.reaction.length;
});

  const Thought = model('Thought', ThoughtSchema);

  module.exports = Thought;