// npm init 
// npm i express 

// import express from 'express'

// nodemon --> to start server

let express = require('express')
let app = express()
app.use(express.json())
require('./conn')
let User = require('./userModel')
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>') //send response to server
})
app.get('/products', (req, res) => {
    let arr = [
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 1,
            name: 'Product 1',
        },


    ]
    res.send(arr)
})


app.get('/user', (req, res) => {
    res.send({
        name: 'salman khan',
        age: 80,
    })
})

app.post('/register', async (req, res) => {
    let user = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    let result = await user.save()
    if (result) {
        res.send('user registered successfully')
    } else {
        res.send('user not registered')
    }
})

app.listen(8000, () => {
    console.log('server is running on port 8000')
})