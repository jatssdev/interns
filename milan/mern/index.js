// npm init 
// npm install express 
// npm install cors 

let express = require('express') // same as import express from 'express'

let cors = require('cors')
let app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>hello from backend</h1>')
})

app.get('/about', (req, res) => {
    let user = { name: 'milan', age: 20, skill: 'mern stack developer' }
    res.send(user)
})


app.post('/register', (req, res) => {
    let user = req.body
    if (user.name) {
        res.send({
            message: 'user registered successfully',
            user: user
        })
    }
    else {
        res.send({
            message: 'user registered failed',

        })
    }
    console.log(user)

    // register logic



})

app.listen(9000, () => {
    console.log('server is running on port 9000')
})