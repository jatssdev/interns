let User = require('../models/User')
const bcrypt = require('bcrypt')
const { cloudinary } = require('../config/cloudinary') //why in {}
const jwt = require('jsonwebtoken')
async function registerHandler(req, res) {
   try {
      let Image;
      if (req.body.path) {

         Image = await cloudinary.uploader.upload(req?.file?.path)
      }

      let hash = await bcrypt.hash(req.body.password, 10);
      console.log(Image)
      let newUser = User({
         name: req.body.name,
         email: req.body.email,
         password: hash,
         profile: Image?.secure_url || null
      })
      let existing = await User.findOne({ email: req.body.email })
      if (existing) {
         res.send({ success: false, message: "User already exist!" })
      } else {
         let result = await newUser.save()
         console.log(result)
         res.send({ success: true, message: "User registered!" })
      }

   } catch (error) {
      res.send({ success: false, message: error.message })
   }
}

async function loginHandler(req, res) {
   try {
      let userexist = await User.findOne({ email: req.body.email })
      let compare = await bcrypt.compare(req.body.password, userexist.password)

      if (userexist && compare) {
         let token = jwt.sign({ id: userexist._id }, 'imamernstackdeveloper', { expiresIn: "1m" })
         res.cookie('token', token, { httpOnly: true })

         res.send({ success: true, message: "Login Successfull!", token })
      } else {
         res.send({ success: false, message: "Invalid Credentials!" })
      }
   } catch (error) {
      res.send({ success: false, message: error.message })
   }
}

module.exports = { registerHandler, loginHandler }