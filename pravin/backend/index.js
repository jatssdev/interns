let express = require('express') // import express from 'express'
let cors = require('cors')
let User = require('./UserModel')



let app = express()
app.use(cors())
app.use(express.json()) // for parsing application/json
require('./db')

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/users', async (req, res) => {
    let users = await User.find()
    res.send(users)
})

app.post('/register', async (req, res) => {
    let user = User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    let result = await user.save()
    if (result) {
        res.send('user registered')
    } else {
        res.send('user not registered')
    }
})
app.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        if (user.password != req.body.password) {
            res.send('invalid password')
        } else {
            res.send('user login successfully')
        }
    } else {
        res.send('user not found')
    }

})


app.delete('/delete/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send('user deleted')
})



app.listen(8000, () => {
    console.log('your app is running on 8000')
})