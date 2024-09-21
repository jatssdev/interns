let express = require('express') // same as import express from 'express'

let cors = require('cors')

let app = express()
app.use(cors())



app.get('/', (req, res) => {
    res.send('<h1>hello from backend</h1>')
})

app.get('/about', (req, res) => {
    let user = { name: 'milan', age: 20, skill: 'mern stack developer' }
    res.send(user)
})



app.listen(9000, () => {
    console.log('server is running on port 9000')
})