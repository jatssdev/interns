let mongoose = require('mongoose');

let userschema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    profile: String
    // currenttime: {type: Array}
})

let User= mongoose.model('users', userschema)
module.exports = User