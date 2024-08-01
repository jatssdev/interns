

let express = require('express')
const { register } = require('../controllers/userController')


let route = express.Router()


route.post('/register', register)


module.exports = route
