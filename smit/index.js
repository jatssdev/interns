let express = require('express')
let app = express()
let cors = require('cors')
let cookieParser = require('cookie-parser')
app.use(cors())
app.use(cookieParser())
app.use(express.json())
require('./config/db')

let userRoutes = require('./routes/user')
let adminRoutes = require('./routes/admin')
app.use('/api', userRoutes)
app.use('/api/admin', adminRoutes)



app.listen(9000, () => {
    console.log('server is running on --> http://localhost:9000')
})