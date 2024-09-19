

let auth = (req, res, next) => {

    let check = true
    if (check) {
        next()
    } else {
        res.send('user auth failed')
    }
}


module.exports = { auth }