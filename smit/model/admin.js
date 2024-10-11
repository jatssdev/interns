let mongose = require('mongoose')

let userSchema = mongose.Schema({
    name: String,
    email: String,
    password: String
})

let Admin = mongose.model('admins', userSchema)

module.exports = Admin