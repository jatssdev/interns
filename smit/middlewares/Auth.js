let jwt = require('jsonwebtoken')
const User = require('../model/user')
let Auth = async (req, res, next) => {

    try {
        let token = req.cookies.token
        if (!token) throw 'token not provided'
        let userDetails = jwt.verify(token, 'hellomynameisjatin')

        let user = await User.findById(userDetails.id)
        req.user = user
        next()
    } catch (e) {
        res.send({ success: false, message: e })
    }


}
module.exports = Auth