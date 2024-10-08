let mongose = require('mongoose')

let userSchema = mongose.Schema({
    name: String,
    email: String,
    password: String
})

let User = mongose.model('users', userSchema)

module.exports = User