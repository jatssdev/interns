let mongoose = require('mongoose')

let productSchema = mongoose.Schema({
    title: String,
    price: Number,
    images: [String],
    category: String
})

let Product = mongoose.model('products', productSchema)

module.exports = Product
