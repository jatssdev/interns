let jwt = require('jsonwebtoken')
let User = require('../models/usermodel')
let auth = async (req, res, next) => {
    try {
        let decoded = jwt.verify(req.cookies.token, 'maganisagoodboy')
        let user = await User.findById(decoded.id)
        req.user = user

        next()
    }
    catch (e) {
        res.send({ success: false, message: e })

    }
}

module.exports = auth