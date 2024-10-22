const User = require("../models/user")
let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken')

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
    try {
        let { email, password } = req.body
        let user = await User.findOne({ email: email })
        if (!user) throw 'user not found'
        let isValid = await bcrypt.compare(password, user.password)
        if (!isValid) throw 'invalid password'
        let token = jwt.sign({ id: user._id }, 'codingcloud', { expiresIn: '5m' })
        res.cookie('token', token, { httpOnly: true })
        res.send({ success: true, message: 'login success', token })
    } catch (e) {
        res.send({ success: false, message: e })
    }
}
let getProfile = async (req, res) => {
    try {
        let user = req.user
        res.send({ success: true, user })
    } catch (e) {
        res.send({ success: false, message: e })
    }
}

module.exports = { getProfile, login, register }