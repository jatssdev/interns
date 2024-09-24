
let express = require('express') // same as import express from 'express'
let app = express()
let cors = require('cors')
app.use(cors())
app.use(express.json())
require('./database/conn')
let User = require('./models/User')
let bcrypt = require('bcryptjs')
let userRoutes = require('./routes/userRoute')

app.use('/api', userRoutes)
app.get('/', (req, res) => {
    res.send('helo wolrd')
})

app.get('/products', (req, res) => {
    let products = ['apple', 'samsung', 'nokia', 'redmi']
    res.send(products)
})


app.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await User.findOne({ email: email })

        if (!user) throw 'Invalid Email Address'

        let isValid = await bcrypt.compare(password, user.password)

        if (!isValid) throw 'Wrong Password'

        res.send({ success: true, message: 'user login ssuccess', user: user })

    } catch (e) {
        res.send({ success: true, message: e })

    }
})



app.get('/users', async (req, res) => {
    let users = await User.find();
    res.send(users)
})

app.delete('/user/:id', async (req, res) => {
    let id = req.params.id
    console.log(id)
    await User.findByIdAndDelete(id)
    res.send({ success: true, msg: 'user deleted' })
})

app.put('/user/:id', async (req, res) => {
    let id = req.params.id

    await User.findByIdAndUpdate(id, { name: req.body.name, email: req.body.email })
    res.send({ success: true, msg: 'user edited' })
})

app.listen(9000, () => {
    console.log('server is running on port 9000')
})