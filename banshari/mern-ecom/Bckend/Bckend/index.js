let express = require('express')   // same as import express from 'express'
const app = express()
let cors = require('cors')
app.use(cors())   //for accepting any frontend.. not perticular one
app.use(express.json())  //converting req to json
let User =  require('./models/User')
require('./config/conn')
const bcrypt = require('bcrypt')

let userRoute  = require('./routes/userRoutes')
app.use('/user', userRoute)

app.get('/', (req,res) => {
    res.send("Hello from backend!!");
})

app.get('/users', async(req,res) => {
   let allusers = await User.find()
   res.send(allusers)

})


app.put('/user/:id',async(req,res) => {
   try {
      let id = req.params.id
      let updateduser = await User.findByIdAndUpdate(id,{email:req.body.email, name:req.body.name})
      res.send({success:true, message: "Update Successfull!"})
   } catch (error) {
      res.send({success:false , message: error.message})
   }
})
app.delete('/user/:id',async(req,res) => {
   let deleteduser = await findByIdAndDelete(id)
   res.send({success:true, message: "User deleted successfully!"})
})
app.listen(9000, () => {
    console.log("listning 9000")
})


