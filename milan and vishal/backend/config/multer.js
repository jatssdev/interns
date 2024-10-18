const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


// Cloudinary configuration
cloudinary.config({
    cloud_name: 'dzkd5zwnz',
    api_key: '464989732649778',
    api_secret: '9nybxEtNJLbvy8aEF966btZqrY4',
});

// Multer storage setup using Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'milan', // Cloudinary folder name
        allowed_formats: ['jpg', 'png'], // Allowed formats
        public_id: (req, file) => Date.now() + '-' + file.originalname.split('.')[0], // Unique file name
    },
});

// Multer middleware setup
const upload = multer({ storage: storage });

module.exports = { upload, cloudinary };
