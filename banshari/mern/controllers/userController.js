let bcrypt = require('bcryptjs')
let User = require('../models/User')
const { cloudinary } = require('../config/cloudinary')



async function registerHandler(req, res) {

    try {



        let image = await cloudinary.uploader.upload(req.file.path)
        let hash = await bcrypt.hash(req.body.password, 10)

        let newUser = User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            profile: image.secure_url
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
}


module.exports = { registerHandler }