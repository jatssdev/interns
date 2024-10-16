let express = require('express')
let app = express()
let cors = require('cors')
let cookieParser = require('cookie-parser')
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
require('./config/db')


let userRoutes = require('./routes/user')
let adminRoutes = require('./routes/admin')
let productRoutes = require('./routes/product')
app.use('/api', userRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/products', productRoutes)



app.listen(9000, () => {
    console.log('server is running on --> http://localhost:9000')
})