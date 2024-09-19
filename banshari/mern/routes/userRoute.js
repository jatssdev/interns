let express = require('express')
const { registerHandler } = require('../controllers/userController')

let router = express.Router()

router.post('/register', registerHandler)






module.exports = router