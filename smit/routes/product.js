let express = require('express')
const Auth = require('../middlewares/Auth')
const { upload } = require('../config/multer')
const { AddProduct } = require('../controllers/product')



let router = express.Router()


router.post('/', upload.fields([
    { name: 'img2', maxCount: 5 },
    { name: 'img1', maxCount: 5 },
    { name: 'img3', maxCount: 5 },
    { name: 'img4', maxCount: 5 },
    { name: 'img5', maxCount: 5 },

]), AddProduct)




module.exports = router