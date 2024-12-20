let express = require('express')
const { Register, Login, Profile } = require('../controllers/user')
const Auth = require('../middlewares/Auth')
const { upload } = require('../config/multer')



let router = express.Router()

router.post('/register', upload.single('profile'), Register)
router.post('/login', Login)
router.get('/user', Auth, Profile)


module.exports = router