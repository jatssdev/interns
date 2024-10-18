let express = require('express')
const { register } = require('../controllers/userController')
const { upload } = require('../config/multer')



let route = express.Router()

route.post('/register', upload.single('profile'), register)


module.exports = route