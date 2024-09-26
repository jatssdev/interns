let jwt = require('jsonwebtoken')
const User = require('../models/User')
async function Auth(req, res, next) {
    try {
        let token = req.cookies.token
        let userDetails = jwt.verify(token, 'hellomynameisjatin')


        let user = await User.findById(userDetails.id)
        if (!user) throw new Error('user not found !')
        // req.user = user.toObject();
        req.user = user
        next()

    } catch (e) {
        res.send(e)
    }


}


module.exports = Auth