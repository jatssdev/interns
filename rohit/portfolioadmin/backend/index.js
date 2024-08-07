let express = require('express')
let app = express()
let dotenv = require('dotenv')
dotenv.config()
require('./config/conn')
let cors = require('cors')
app.use(cors())
let cs = require('cookie-parser')
app.use(cs())
app.use(express.json())
let adminRouter = require('./routes/adminRoutes')


app.use('/api/admin', adminRouter)




let PORT = process.env.PORT
app.listen(PORT, () => console.log('Your App Is Running On ', PORT))

