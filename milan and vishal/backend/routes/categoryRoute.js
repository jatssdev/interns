let express = require('express')
const { addNewCategory } = require('../controllers/categoryController')



let route = express.Router()

route.post('/', addNewCategory)



module.exports = route


