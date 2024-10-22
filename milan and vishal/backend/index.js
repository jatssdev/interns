
let cookieParser = require('cookie-parser')

let express = require('express')
let cors = require('cors')
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
require('./config/conn')
let userRoutes = require('./routes/userRoutes')
app.use('/api/user', userRoutes)

app.listen(9000, () => console.log('server is running on 9000'))