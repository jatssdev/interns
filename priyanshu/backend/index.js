


let express = require('express')
let cors = require('cors')
let app = express()
app.use(express.json())
app.use(cors())
require('./conn')

let User = require('./userModel')


app.get('/', (req, res) => {
    console.log('hello world')
    res.send('hello world')
})

app.post('/register', async (req, res) => {
    let user = User({
        name: req.body.name, email: req.body.email, password: req.body.password
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

app.get('/users', async (req, res) => {
    let users = await User.find()
    res.send(users)
})


app.listen(9000, () => console.log('server is running on 9000'))