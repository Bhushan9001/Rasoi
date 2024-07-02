const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    const cgName = Date.now() + path.extname(file.originalname)
    req.body.filename = cgName;
    cb(null, cgName);
  }
});

const upload = multer({ storage: storage });


module.exports = upload;