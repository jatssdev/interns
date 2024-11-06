// npm init 
// npm i express cors mongoose 
// nodemon ---> start server

// let express = require('express') //same as import express from 'express'
let bcrypt = require('bcryptjs')

let express = require('express')

let app = express();
app.use(express.json())
require('./conn')
let User = require('./userModel')


app.get('/', (req, res) => {
    // res.send('hello world')
    // res.send('<h1>hello world</h1>')
    res.send(['jatin', 'hello'])
})



app.post('/register', async (req, res) => {
    let { name, email, password } = req.body
    let existing = await User.findOne({ email: email })
    if (existing) {
        res.send({ status: 'failed', message: 'user already exists!' })
    }
    else {

        let hash = await bcrypt.hash(password, 10)
        let user = User({
            name: name,
            email: email,
            password: hash
        })
        let result = await user.save()
        if (result) {
            res.send({
                status: 'success', message: 'user registered successfully!', user: result
            })
        } else {
            res.send({ status: 'failed', message: 'user not registered' })
        }
    }

})
app.get('/users', async (req, res) => {
    let users = await User.find()
    res.send(users)
})









app.listen(9000, () => {
    console.log('server is running on 9000')
})