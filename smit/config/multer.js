const multer = require('multer')
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dzkd5zwnz',
    api_key: "464989732649778",
    api_secret: '9nybxEtNJLbvy8aEF966btZqrY4'
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "smit",
    },
});

let upload = multer({ storage: storage })

module.exports = { upload, cloudinary }