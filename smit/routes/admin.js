let express = require('express')
const Auth = require('../middlewares/Auth')
const { upload } = require('../config/multer')
const { Login } = require('../controllers/admin')


let router = express.Router()


router.post('/login', Login)
router.post('/login', Login)



module.exports = router