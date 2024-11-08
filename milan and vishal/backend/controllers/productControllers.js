const Product = require("../models/product")


let addNewProduct = async (req, res) => {
    try {
        let { title, price, category } = req.body
        let files = req.files
        let images = []
        files.map((x) => {
            images.push(x.path)
        })
        let product = Product({
            title: title,
            price: price,
            category: category,
            images: images
        })
        let result = await product.save()
        if (result) {
            res.send({ message: "Product added successfully", status: 200 })
        } else {
            res.send({ message: "Failed to add product", status: 400 })
        }

    } catch (e) {
        res.send({ success: false, message: e })
    }
}

let getAllProducts = async (req, res) => {
    let products = await Product.find()
    res.send(products)
}


let getPRoductByCategory = async (req, res) => {
    let category = req.params.category
    let products = await Product.find({ category: category })
    if (products) {

        res.send(products)


    } else {
        res.send('error : database error')
    }
}



module.exports = { getAllProducts, getPRoductByCategory, addNewProduct }