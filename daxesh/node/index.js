let express = require('express') // same as import express from 'express'
let app = express()
let cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
    res.send('helo wolrd')
})

app.get('/products', (req, res) => {
    let products = ['apple', 'samsung', 'nokia', 'redmi']
    res.send(products)
})






app.listen(9000, () => {
    console.log('server is running on port 9000')
})