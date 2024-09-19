let express = require('express')
const { upload } = require('../config/cloudinary')
const { registerHandler } = require('../controllers/userController')

let router = express.Router()

router.post('/register', upload.single('profile'), registerHandler)







module.exports = router