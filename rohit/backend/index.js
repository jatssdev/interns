
let express = require('express') //import express from 'express'
let cors = require('cors')
let app = express()
require('./conn')
app.use(cors())
app.use(express.json())
let bcrypt = require('bcryptjs')
let User = require('./usermodel')
app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.get('/about/:email/:password', (req, res) => {
    console.log(req.params)
    res.send('<h1>' + req.params['email'] + '</h1>')
})

app.get('/products', (req, res) => {
    res.send(['jatin', 'magan', 'chhagan', 'lagan'])
})

app.post('/register', async (req, res) => {
    let existing = await User.findOne({ email: req.body.email })
    if (existing) {
        res.send('user already exists')
    } else {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        let user = User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        let result = await user.save()
        if (result) {
            res.send('user added')
        } else {
            res.send('user not added')
        }
    }
})

app.get('/users', async (req, res) => {
    let users = await User.find()
    res.send(users)
})

app.delete('/delete/:id', async (req, res) => {
    // http://localhost:8000/delete/change_this_id
    let result = await User.findByIdAndDelete(req.params.id)
    if (result) {
        res.send({
            message: 'user deleted',
            success: true
        })
    } else {
        res.send({
            message: 'user not deleted',
            success: false
        })
    }

})

app.put('/update/:id', async (req, res) => {
    // http://localhost:8000/update/change_this_id
    let result = await User.findByIdAndUpdate(req.params.id, { email: req.body.email, name: req.body.name })
    if (result) {
        res.send({
            message: 'user Updated',
            success: true
        })
    } else {
        res.send({
            message: 'user not Updated',
            success: false
        })
    }

})

app.listen(8000, () => console.log('your app is running on http://localhost:8000'))


// npm init -----> to initialise npm
// npm i express cors


// npm i bcryptjs
// npm i mongoose 