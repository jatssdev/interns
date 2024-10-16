let express = require('express')
const Auth = require('../middlewares/Auth')

const { AddProduct, SingleProduct, DeleteProduct, GetAllProducts } = require('../controllers/product')
const { upload } = require('../config/multer')



let router = express.Router()


router.post('/', upload.array('images', 10), AddProduct)
router.get('/', GetAllProducts)
router.get('/:id', SingleProduct)
router.delete('/:id', DeleteProduct)


module.exports = router