let mongoose = require('mongoose')

let categorySchema = mongoose.Schema({
    category: String,
})

let Category = mongoose.model('categorys', categorySchema)

module.exports = Category
