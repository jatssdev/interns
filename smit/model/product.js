let mongose = require('mongoose')

let productSchema = mongose.Schema({
    title: String,
    price: Number,
    category: String,
    images: [String]
})

let Product = mongose.model('products', productSchema)

module.exports = Product