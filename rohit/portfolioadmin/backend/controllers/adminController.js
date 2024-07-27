let Message = require('../models/contact')
let User = require('../models/usermodel')
let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken')


let register = async (req, res) => {
    let existing = await User.findOne({ email: req.body.email })
    if (existing) {
        res.send('user already exists')
    } else {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        let user = User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        let result = await user.save()
        if (result) {
            res.send('user added')
        } else {
            res.send('user not added')
        }
    }
}

let login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })

        if (!user) throw 'invalid email id '

        let checkpassword = await bcrypt.compare(req.body.password, user.password)
        if (!checkpassword) throw 'invalid password'

        let token = jwt.sign({ id: user._id }, 'maganisagoodboy', { expiresIn: '2m' })


        res.cookie('token', token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true,

        });

        res.send({ success: true, message: 'login success', user })

    } catch (e) {
        res.send({ success: false, message: e })
    }

}

let checkAuth = async (req, res) => {
    res.send({ success: true, user: req.user })
}
function index(req, res) {
    res.send('hello from admin')
}

async function StoreMessage(req, res) {
    let { name, email, message } = req.body
    let newMessage = Message({
        name, email, message
    })


    let result = await newMessage.save();


    if (result) {
        res.send({ success: true, message: 'contact Message Sent Successfully' })
    } else {
        res.send({ success: false, message: 'Error :  Error Storing Message ' })

    }

}

let getAllMessage = async (req, res) => {
    let messages = await Message.find();
    res.send({ success: true, messages })


}


module.exports = { index, checkAuth, login, register, getAllMessage, StoreMessage }