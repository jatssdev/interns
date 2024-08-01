const mongoose = require('mongoose')


let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean, default: false
    },
    avatar: {
        type: String, default: 'https://static.vecteezy.com/system/resources/previews/045/944/199/non_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-background-man-silhouette-picture-for-user-profile-in-social-media-forum-chat-greyscale-illustration-vector.jpg'
    }, token: {
        type: String, default: null
    }
})

let User = mongoose.model('users', userSchema)


module.exports = User