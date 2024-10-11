let mongose = require('mongoose')

let productSchema = mongose.Schema({
    name: String,
    email: String,
    password: String
})

let User = mongose.model('users', productSchema)

module.exports = User