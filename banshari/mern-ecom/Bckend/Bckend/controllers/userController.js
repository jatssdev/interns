let User =  require('../models/User') 
const bcrypt = require('bcrypt')
const {cloudinary} = require('../config/cloudinary') //why in {}

async function registerHandler(req,res) {
    try {
      console.log("FSf");
         let Image = await cloudinary.uploader.upload(req.file.path)
        let hash = await bcrypt.hash(req.body.password, 10);
        console.log(Image)
        let newUser =  User({
           name: req.body.name,
           email: req.body.email,
           password: hash,
           profile: Image.secure_url
         })
          let existing=  await User.findOne({email: req.body.email})
          if(existing){
             res.send({success:false, message: "User already exist!"})
          }else{
             let result  = await newUser.save()
             console.log(result)
             res.send({success:true, message: "User registered!"})
          }
     
       } catch (error) {
         res.send({success:false , message: error.message})
       }
}

async function loginHandler(req,res){
    try {
        console.log(req.body);
        let userexist = await User.findOne({email: req.body.email})
        let compare = await bcrypt.compare(req.body.password, userexist.password)
      
        if(userexist && compare){
         res.send({success:true, message: "Login Successfull!"})
        }else{
         res.send({success:false, message: "Invalid Credentials!"})
        }
     } catch (error) {
        res.send({success:false , message: error.message})
     }
}

module.exports = {registerHandler, loginHandler}