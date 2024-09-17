// npm init --> initialise node package manager 
// npm i cors express // install express and cors

let express = require('express') // same as import express from 'express'
const app = express()
let cors = require('cors')
app.use(cors())
app.use(express.json())
require('./conn')
let User = require('./User')
let bcrypt = require('bcryptjs')


app.get('/', (req, res) => {

    res.send('Hello from Backend')
})
// app.get('/users', (req, res) => {
//     let arr = ['jatin', 'magan']
//     res.send(arr)
// })

app.get('/users', async (req, res) => {
    let users = await User.find();
    res.send(users)

})
app.delete('/user/:id', async (req, res) => {
    let id = req.params.id
    let deletedUser = await User.findByIdAndDelete(id)
    res.send({ success: true, message: 'user deleted ' })
})
app.put('/user/:id', async (req, res) => {
    let id = req.params.id
    let deletedUser = await User.findByIdAndUpdate(id, { email: req.body.email, name: req.body.name })
    res.send({ success: true, message: 'user updated ' })
})


app.post('/register', async (req, res) => {
    try {



        let hash = await bcrypt.hash(req.body.password, 10)

        let newUser = User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        let existing = await User.findOne({ email: req.body.email })
        console.log(existing)

        // let check = await bcrypt.compare(req.body.password, existing.password)
        // console.log(check)

        if (existing) {
            res.send({ success: false, message: 'user already exists' })
        } else {
            let result = await newUser.save()
            res.send({ success: true, message: 'user Registered', user: result })
        }
    } catch (e) {
        console.log(e)
        res.send({ success: false, message: e })
    }
})


app.listen(9000, () => {
    console.log('server is running on port 9000')
})