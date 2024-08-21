let mongoose = require('mongoose')


let USerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

let User = mongoose.model('users', USerSchema)
module.exports = User