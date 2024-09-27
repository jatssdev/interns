let express = require('express')
const { registerHandler, loginHandler } = require('../controllers/userController')
const { upload } = require('../config/cloudinary')

let router = express.Router()

router.post('/register',upload.single('profile'),registerHandler)
router.post('/login',loginHandler)

module.exports = router