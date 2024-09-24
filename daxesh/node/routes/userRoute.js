
let express = require('express')
const { registerHandler } = require('../controllers/userController')
const { upload } = require('../configs/multer')


let route = express.Router()
route.post('/register', upload.single('profile'), registerHandler)
module.exports = route