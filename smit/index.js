let express = require('express')
let app = express()
let cors = require('cors')
app.use(cors())
app.use(express.json())
require('./config/db')

let userRoutes = require('./routes/user')
app.use('/api', userRoutes)





app.listen(9000, () => {
    console.log('server is running on --> http://localhost:9000')
})