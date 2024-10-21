// npm init 
// npm i express 

// import express from 'express'

let express = require('express')
let app = express()

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



app.listen(8000, () => {
    console.log('server is running on port 8000')
})