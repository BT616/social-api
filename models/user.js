const {Schema, model}= require('mongoose');


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username: { 
    type: String,
    // unique: true,
    // required: 'username is required',
    // trim: true
}
// },
// {
//     email: {
//     type: String,
//     required: 'email is required',
//     unique: true,
//     required: 'Email address is required',
//         validate: [validateEmail, 'Please fill a valid email address'],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
// }

},
// {
//     toJSON:{
//         virtuals: true,
//     },
//     id:false,
// },
);

// userSchema.virtual('friendCount').get(function (){
//     return this.friends.length;
// });

const User = model('User', userSchema);

module.exports = User;