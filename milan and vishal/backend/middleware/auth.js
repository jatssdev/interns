let jwt = require('jsonwebtoken')
let User = require('../models/user')

let auth = async (req, res, next) => {
    try {
        let token = req.cookies.token
        if (!token) throw 'token not found'

        let details = jwt.verify(token, 'codingcloud')

        let user = await User.findById(details.id)
        if (!user) throw 'user not found'

        req.user = user

        next()
    } catch (e) {
        res.send({ message: e })
    }
}



module.exports = auth