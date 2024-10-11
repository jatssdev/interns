const jwt = require("jsonwebtoken")
const User = require("../model/user")
const Admin = require("../model/admin")



let Login = async (req, res) => {
    let { email, password } = req.body
    try {
        let user = await Admin.findOne({ email })
        if (!user) throw 'User Not Found!'
        if (user.password !== password) throw 'wrong password'


        let token = jwt.sign({ id: user._id }, 'hellomynameisjatin', { expiresIn: '1h' })

        res.cookie('adminToken', token, { httponly: true })
        res.send({ success: true, message: 'Login Success' })


    } catch (e) {
        console.log(e)
        res.send({
            message: e,
            success: false
        })
    }




}



module.exports = {
    Login
}