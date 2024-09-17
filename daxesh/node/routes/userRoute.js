
let express = require('express')
const { registerHandler } = require('../controllers/userController')


let route = express.Router()




route.post('/register', registerHandler)


module.exports = route