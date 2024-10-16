const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config(); // Load environment variables

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer storage setup using Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'smit', // Cloudinary folder name
        allowed_formats: ['jpg', 'png'], // Allowed formats
        public_id: (req, file) => Date.now() + '-' + file.originalname.split('.')[0], // Unique file name
    },
});

// Multer middleware setup
const upload = multer({ storage });

module.exports = { upload, cloudinary };
