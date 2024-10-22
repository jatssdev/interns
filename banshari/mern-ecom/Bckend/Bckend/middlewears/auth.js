let jwt = require('jsonwebtoken')
let User = require('../models/User')
let verifyUser = async (req, res, next) => {
    try {
        let token = req.cookies.token
        let details = jwt.verify(token, 'imamernstackdeveloper')
        let user = await User.findById(details.id)
        if (!user) throw 'invalid token or user id'
        req.user = user
        next()
    } catch (e) {
        res.send({ success: false, message: e })
    }
}

module.exports = verifyUser