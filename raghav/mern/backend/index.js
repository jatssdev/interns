let express = require('express') //import express from 'express'
let cors = require('cors')
let app = express()
app.use(cors())
app.use(express.json())
let User = require('./userModel')
require('./db')


app.get('/', (req, res) => {
    res.status(200)
    res.send('<h1>hlow</h1>')
})

app.get('/about', (req, res) => {
    res.status(200)
    res.send('<h1>hlow about</h1>')
})

app.get('/products', (req, res) => {
    res.status(200)
    res.send(arr)
})

app.post('/register', async (req, res) => {
    let existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) {
        res.send({ success: false, message: 'user already exists!' })
    } else {
        let newUser = User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        let result = await newUser.save()
        if (result) {

            res.send({ success: true, message: 'user registered sccessfully', user: result })
        } else {
            res.send({ success: false, message: 'Error : database error ' })

        }
    }

})

app.listen(9000, () => {
    console.log('surver is running on 9000')
})