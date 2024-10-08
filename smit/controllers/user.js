const User = require("../model/user")
let bcrypt = require('bcryptjs')

let Register = async (req, res) => {
    let { name, email, password } = req.body
    try {
        let hash = await bcrypt.hash(password, 10)
        let user = User({
            name: name,
            email: email,
            password: hash
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

module.exports = { Register }