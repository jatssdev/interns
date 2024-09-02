let express = require('express') //import express from 'express'
let cors = require('cors')
let app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/about', (req, res) => {
    res.send('hello About')
})
app.get('/products', (req, res) => {
    let data = [
        {
            id: 1,
            name: 'product 1',
        },
        {
            id: 1,
            name: 'product 2',
        }, {
            id: 1,
            name: 'product 3',
        }, {
            id: 1,
            name: 'product 4',

        }, {
            id: 1,
            name: 'product 5',
        },

    ]
    res.send(data)
})

app.post('/register', (req, res) => {
    console.log(req.body)
})
app.listen(8000, () => {
    console.log('server is running on port 8000')
})