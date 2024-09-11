// npm init --> initialise node package manager 
// npm i cors express // install express and cors

let express = require('express') // same as import express from 'express'
const app = express()
let cors = require('cors')
app.use(cors())
app.use(express.json())
require('./conn')
let User = require('./User')


app.get('/', (req, res) => {

    res.send('Hello from Backend')
})
app.get('/users', (req, res) => {
    let arr = ['jatin', 'magan']
    res.send(arr)
})


app.post('/register', async (req, res) => {
    try {
        let newUser = User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        let existing = await User.findOne({ email: req.body.email })
        
        if (existing) {
            res.send({ success: false, message: 'user already exists' })
        } else {
            let result = await newUser.save()
            res.send({ success: true, message: 'user Registered', user: result })
        }
    } catch (e) {
        res.send({ success: false, message: e })
    }
})


app.listen(9000, () => {
    console.log('server is running on port 9000')
})