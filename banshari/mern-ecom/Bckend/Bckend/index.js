let express = require('express')   // same as import express from 'express'
const app = express()
let cors = require('cors')
app.use(cors())   //for accepting any frontend.. not perticular one
app.use(express.json())  //converting req to json
let User = require('./models/User')
require('./config/conn')
const bcrypt = require('bcrypt')
let cookieParser = require('cookie-parser')
let userRoute = require('./routes/userRoutes')
const verifyUser = require('./middlewears/auth')
app.use('/api/user', userRoute)
app.use(cookieParser())
app.get('/', (req, res) => {
   res.send("Hello from backend!!");
})

app.get('/users', verifyUser, async (req, res) => {
   try {

      let allusers = await User.find()
      res.send(allusers)
   } catch (e) {
      res.send({ success: false, message: e })
   }

})
app.get('/api/profile', verifyUser, async (req, res) => {
   try {
      let user = req.user
      res.send(user)
   } catch (e) {
      res.send({ success: false, message: e })
   }

})


app.put('/user/:id', async (req, res) => {
   try {
      let id = req.params.id
      let updateduser = await User.findByIdAndUpdate(id, { email: req.body.email, name: req.body.name })
      res.send({ success: true, message: "Update Successfull!" })
   } catch (error) {
      res.send({ success: false, message: error.message })
   }
})
app.delete('/user/:id', async (req, res) => {
   let deleteduser = await findByIdAndDelete(id)
   res.send({ success: true, message: "User deleted successfully!" })
})
app.listen(9000, () => {
   console.log("listning 9000")
})


