let User = require('../models/usermodel')
let bcrypt = require('bcryptjs')
let register = async (req, res) => {
    console.log(req.body)
    try {
        let { name, email, password } = req.body;
        if (!name) throw 'name field is require'
        if (!email) throw 'email field is require'
        if (!password) throw 'password field is require'
        let existing = await User.findOne({ email })
        if (existing) throw 'email already exist'
        let hashedpass = await bcrypt.hash(password, 10)
        let user = new User({ name, email, password: hashedpass });
        user.save()
        res.send({ success: true, message: 'user registered successfully' })
    } catch (e) {
        res.status(500).send({ success: false, message: e })
    }


}


module.exports = { register }