let User = require('../models/User')
let bcrypt = require('bcryptjs')

let registerHandler = async (req, res) => {
    // console.log(req.body)
    // console.log(req.file.path)

    let existing = await User.findOne({ email: req.body.email })
    console.log(existing)
    if (existing) {
        res.send({ message: 'Email already exists' })
    } else {
        let hash = await bcrypt.hash(req.body.password, 10)
        let newUser = User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            profile: req.file.path
        })
        let result = await newUser.save()
        if (result) {
            res.send('user created')
        } else {
            res.send('user not created')
        }
    }

}

module.exports = { registerHandler }