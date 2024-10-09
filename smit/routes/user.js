let express = require('express')
const { Register, Login, Profile } = require('../controllers/user')
const Auth = require('../middlewares/Auth')


let router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/user', Auth, Profile)


module.exports = router