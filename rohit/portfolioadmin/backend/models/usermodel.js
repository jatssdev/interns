let mongoose = require('mongoose')


let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: {
        type: String, default: null
    }
})


let User = mongoose.model('users', userSchema)

module.exports = User