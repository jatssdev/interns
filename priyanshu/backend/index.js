


let express = require('express')
let cors = require('cors')
let app = express()
app.use(express.json())
app.use(cors())
require('./conn')
let bcrypt = require('bcryptjs')

let User = require('./userModel')


app.get('/', (req, res) => {
    console.log('hello world')
    res.send('hello world')
})

app.post('/register', async (req, res) => {
    let hash = await bcrypt.hash(req.body.password, 10)
    let user = User({
        name: req.body.name, email: req.body.email, password: hash
    })
    let existing = await User.findOne({ email: req.body.email })
    if (existing) {
        res.send('user already exists')
    } else {
        let result = await user.save()
        if (result) {
            res.send('user registered successfully')
        } else {
            res.send('Database Error : user not registered')
        }
    }
})

app.post('/login', async (req, res) => {
    let { email, password } = req.body

    let user = await User.findOne({ email: email })
    if (user) {
        let checkPass = await bcrypt.compare(password, user.password)
        if (checkPass) {
            res.send({ user: user, message: 'login success!', success: true })
        } else {
            res.send('wrong password')
        }
    } else {
        res.send('user not found')
    }

})

app.delete('/user/:id', async (req, res) => {
    let id = req.params.id
    let result = await User.findByIdAndDelete(id)
    if (result) {
        res.send('user deleted successfully')
    } else {
        res.send('Database Error : user not deleted')
    }
})

app.get('/users', async (req, res) => {
    let users = await User.find()
    res.send(users)
})


app.listen(9000, () => console.log('server is running on 9000'))