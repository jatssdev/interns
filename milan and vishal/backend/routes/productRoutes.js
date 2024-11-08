let express = require('express')
const { addNewProduct, getAllProducts, getPRoductByCategory } = require('../controllers/productControllers.js')
const { upload } = require('../config/multer')
const auth = require('../middleware/auth')



let route = express.Router()

route.post('/', upload.array('images'), addNewProduct)
route.get('/', getAllProducts)
route.get('/:category', getPRoductByCategory)


module.exports = route


