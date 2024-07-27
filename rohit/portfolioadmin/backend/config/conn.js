let mongoose = require('mongoose')


mongoose.connect(process.env.MONGOURL).then(() => {
    console.log('database connected')
})