let express = require('express') //import express from 'express'
let cors = require('cors')
let app = express()
app.use(cors())
app.use(express.json())
let User = require('./userModel')
require('./db')
let bcrypt = require('bcryptjs')
app.get('/', (req, res) => {
    res.status(200)
    res.send('<h1>hlow</h1>')
})
app.get('/users', async (req, res) => {
    let users = await User.find();
    res.send(users)


})
app.get('/about', (req, res) => {
    res.status(200)
    res.send('<h1>hlow about</h1>')
})
app.get('/products', (req, res) => {
    res.status(200)
})
app.post('/register', async (req, res) => {
    let existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) {
        res.send({ success: false, message: 'user already exists!' })
    } else {
        let hashedpass = await bcrypt.hash(req.body.password, 10)
        console.log(hashedpass)
        let newUser = User({
            name: req.body.name,
            email: req.body.email,
            password: hashedpass
        })
        let result = await newUser.save()
        if (result) {
            let { password, ...secureUSer } = result.toObject()
            res.send({ success: true, message: 'user registered sccessfully', user: secureUSer })
        } else {
            res.send({ success: false, message: 'Error : database error ' })

        }
    }
})
app.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        let isMatch = await bcrypt.compare(req.body.password, user.password)
        if (isMatch) {
            res.send({ success: true, message: 'Login Successfully', user })
        } else {
            res.send({ success: false, message: 'password do not match' })
        }
    } else {
        res.send({ success: false, message: 'invalid email' })
    }
})

app.delete('/user/delete/:id', async (req, res) => {
    let result = await User.findByIdAndDelete(req.params.id)
    if (result)
        res.send({ success: true, message: 'user deleted successfully' })
})
app.put('/user/edit/:id', async (req, res) => {
    let result = await User.findByIdAndUpdate(req.params.id, { name: req.body.name, email: req.body.email })
    if (result) {
        res.send({ success: true, message: 'user updated successfully' })
    }
})
app.listen(9000, () => {
    console.log('surver is running on 9000')
})