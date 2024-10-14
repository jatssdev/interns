let mongose = require('mongoose')

let productSchema = mongose.Schema({
    title: String,
    email: String,
    password: String
})

let User = mongose.model('users', productSchema)

module.exports = User