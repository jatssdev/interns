let jwt = require('jsonwebtoken')
const Admin = require('../model/admin')
let adminAuth = async (req, res, next) => {

    try {
        let token = req.cookies.token
        if (!token) throw 'token not provided'
        let userDetails = jwt.verify(token, 'hellomynameisjatin')

        let user = await Admin.findById(userDetails.id)
        req.user = user
        next()
    } catch (e) {
        res.send({ success: false, message: e })
    }


}
module.exports = adminAuth