// npm init --> initialise node package manager 
// npm i cors express // install express and cors

let express = require('express') // same as import express from 'express'
const app = express()
let cors = require('cors')
app.use(cors())
app.use(express.json())
require('./config/conn')
let User = require('./models/User')
let userRoute = require('./routes/userRoute')
const { auth } = require('./middleware/user')


app.get('/', (req, res) => {

    res.send('Hello from Backend')
})
// app.get('/users', (req, res) => {
//     let arr = ['jatin', 'magan']
//     res.send(arr)
// })
app.use('/user', userRoute)


app.get('/users', auth, async (req, res) => {
    let users = await User.find();
    res.send({ users: users })

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




app.listen(9000, () => {
    console.log('server is running on port 9000')
})