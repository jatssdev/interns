let express = require('express')
const { addNewProduct, getAllProducts } = require('../controllers/productControllers.js')
const { upload } = require('../config/multer')
const auth = require('../middleware/auth')



let route = express.Router()

route.post('/', upload.array('images'), addNewProduct)
route.get('/', getAllProducts)


module.exports = route