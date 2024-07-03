const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/raghav').then(() => {
    console.log('mongodb connected successfully')
})