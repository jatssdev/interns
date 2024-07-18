
let express = require('express') //import express from 'express'
let cors = require('cors')



let app = express()

app.use(cors())

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


app.listen(8000, () => console.log('your app is running on http://localhost:8000'))


// npm init -----> to initialise npm
// npm i express cors


