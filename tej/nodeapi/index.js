// npm init 
// npm i express cors mongoose 
// nodemon ---> start server

// let express = require('express') //same as import express from 'express'


let express = require('express')

let app = express();
app.use(express.json())


app.get('/', (req, res) => {
    // res.send('hello world')
    // res.send('<h1>hello world</h1>')
    res.send(['jatin', 'hello'])
})



app.post('/register', (req, res) => {
    console.log(req.body)
    res.send({
        status: 'success', message: 'user registered successfully!',user:req.body
    })
})
app.get('/users',(req,res)=>{
    let users = [
        'jatin','magan','simon'
    ]
    res.send(users)
})









app.listen(9000, () => {
    console.log('server is running on 9000')
})