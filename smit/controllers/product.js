let Product = require('../model/product')
let AddProduct = async (req, res) => {
    let { title, price, category } = req.body
    let images = [];
    if (req.files) {
        req.files.map((x) => {
            images.push(x.path)
        })
    }
    let product = Product({
        title,
        price,
        category,
        images

    })
    let result = await product.save()
    if (result) {
        res.send({ message: "Product Added Successfully" })
    } else {
        res.send({ message: 'Error : failed to add product' })

    }

}
let GetAllProducts = async (req, res) => {
    let products = await Product.find()
    if (products) {
        res.send(products)
    } else {
        res.send({ message: 'Error : Server Error ' })
    }

}
let SingleProduct = async (req, res) => {
    let id = req.params.id

    let product = await Product.findById(id)
    if (product) {
        res.send(product)
    } else {
        res.send({ message: 'Error : Server Error ' })
    }

}
let DeleteProduct = async (req, res) => {
    let id = req.params.id

    let product = await Product.findByIdAndDelete(id)
    if (product) {
        res.send({ message: 'product deleted!' })
    } else {
        res.send({ message: 'Error : Server Error ' })
    }

}
module.exports = { DeleteProduct, GetAllProducts, SingleProduct, AddProduct }