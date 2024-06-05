const multer = require('multer')
const fs = require('fs');
const path = require('path');


const uploadsDir = path.join(__dirname, '../../images');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const cgName = Date.now() + path.extname(file.originalname)
        req.body.filename = cgName;
        cb(null, cgName);
    },
});

const upload = multer({ storage });


module.exports = upload;