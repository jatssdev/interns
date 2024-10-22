let express = require('express')
const { register, login, getProfile } = require('../controllers/userController')
const { upload } = require('../config/multer')
const auth = require('../middleware/auth')



let route = express.Router()

route.post('/register', upload.single('profile'), register)
route.post('/login', login)
route.get('/profile', auth, getProfile)


module.exports = route