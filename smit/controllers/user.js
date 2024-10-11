const jwt = require("jsonwebtoken")
const User = require("../model/user")
let bcrypt = require('bcryptjs')

let Register = async (req, res) => {
    let file = req.file.path


    let { name, email, password } = req.body
    try {
        let hash = await bcrypt.hash(password, 10)
        let user = User({
            name: name,
            email: email,
            password: hash,
            profile: file
        })

        let existing = await User.findOne({ email })

        if (existing) throw 'user Already Registered!'

        let result = await user.save()
        if (!result) {
            throw 'User Not Created!'
        }
        res.json({ success: true, message: "User created successfully" })
    } catch (e) {
        res.json({ success: false, message: e })

    }

}

let Login = async (req, res) => {
    let { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) throw 'User Not Found!'
        let verify = await bcrypt.compare(password, user.password)
        if (!verify) throw 'Invalid Password!'

        let token = jwt.sign({ id: user._id }, 'hellomynameisjatin', { expiresIn: '1h' })

        res.cookie('token', token, { httponly: true })
        res.send({ success: true, message: 'Login Success' })


    } catch (e) {
        console.log(e)
        res.send({
            message: e,
            success: false
        })
    }




}
let Profile = async (req, res) => {

    try {
        let user = req.user
        res.send({ user, success: true })
    } catch (e) {
        res.send({ message: e, success: false })

    }


}


module.exports = { Register, Profile, Login }