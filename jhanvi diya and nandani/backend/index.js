// http://localhost:8000/your-created-route
// npm init 
// npm i express

// import express from 'express'

// nodemon --> to start server

let express = require('express') //import express 
let app = express() // create app and call express function
app.use(express.json()) // configuration for sending json formatted data 
require('./conn') // import database connection file
let User = require('./userModel') // import user model 
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
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