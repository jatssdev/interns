const User = require("../models/user")
let bcrypt = require('bcryptjs')

let register = async (req, res) => {
    try {
        let avatar = req.file.path


        let { name, email, password } = req.body
        let existing = await User.findOne({ email: email })
        if (existing) throw 'user already exists'
        let hashedPassword = await bcrypt.hash(password, 10)
        let user = User({
            name, email, password: hashedPassword, profile: avatar
        })
        let saved = await user.save()
        if (!saved) throw 'Error from backend'
        res.send({
            success: true,
            message: 'user registered successfully',
            user
        })

    } catch (e) {
        res.send({ success: false, message: e })
    }
}
let login = async (req, res) => {

}

module.exports = { login, register }