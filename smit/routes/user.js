let express = require('express')
const { Register } = require('../controllers/user')


let router = express.Router()

router.post('/register', Register)


module.exports = router