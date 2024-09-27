let multer = require('multer')
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
 
cloudinary.config({
    cloud_name: "de9otxhly",
    api_key: "177989616558661",
    api_secret: "q23iTAGm48D1eJPhdGuFpPONPCo"
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "authDoc",
    },
})

let upload = multer({storage:storage})
// let upload = multer({dest:"/upload"})

module.exports = {upload,cloudinary}