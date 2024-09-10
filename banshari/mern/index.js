let express = require('express') // same as import express from 'express'
const app = express()
let cors = require('cors')
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {

    res.send('Hello from Backend')
})
app.get('/users', (req, res) => {
    let arr = ['jatin', 'magan']
    res.send(arr)
})

app.post('/register', (req, res) => {
    console.log(req.body)
    res.send({ success: true, message: 'user Registered', user: req.body })
})



app.listen(9000, () => {
    console.log('server is running on port 9000')
})