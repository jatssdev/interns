let express = require('express') //import express from 'express'
let cors = require('cors')
let app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
let UserRoute = require('./routes/userRoutes')
require('./config/conn')
app.set('view engine', 'ejs');
app.use('/api/user', UserRoute)
app.get('/', (req, res) => {
    let data = { name: 'raghav', arr: ['jatin', 'magan', 'raghav'] }
    res.render('index', { data })
})
app.listen(9000, () => {
    console.log('surver is running on 9000')
})