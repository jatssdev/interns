
let express = require('express') // same as import express from 'express'
let app = express()
let cors = require('cors')
app.use(cors())
app.use(express.json())
require('./conn')
let User = require('./User')

app.get('/', (req, res) => {
    res.send('helo wolrd')
})

app.get('/products', (req, res) => {
    let products = ['apple', 'samsung', 'nokia', 'redmi']
    res.send(products)
})

app.post('/register', async (req, res) => {
    let newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password


    })

    let result = await newUser.save()
    if (result) {
        res.send('user created')
    } else {
        res.send('user not created')
    }
})


app.listen(9000, () => {
    console.log('server is running on port 9000')
})