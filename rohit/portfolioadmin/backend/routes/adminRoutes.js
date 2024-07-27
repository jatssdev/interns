let express = require('express')
const { index, StoreMessage, getAllMessage, register, login, checkAuth } = require('../controllers/adminController')
const auth = require('../middleware/auth')


let router = express.Router()

router.get('/', index)
router.post('/message', StoreMessage)
router.get('/message', auth, getAllMessage)
router.get('/verify', auth, checkAuth)
router.post('/register', register)
router.post('/login', login)


module.exports = router
