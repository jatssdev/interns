// npm init 
// npm install express 
// npm install  cors 
let express = require('express') // same as --> import express from 'express'
let app = express()
let cors = require('cors')
app.use(cors()) // use corse to solve cross origin errors

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})
app.get('/products', (req, res) => {

    let arr = ['apple i phone 13', 'samsung galaxy ', 'redmi note ', 'realme mobiles']
    res.send(arr)
})


app.listen(8000, () => console.log('server is running on http://localhost:8000'))