const {Router} = require('express');
const upload = require('../middleware/uploadImage')
const { authController } = require('../controllers/userController');

const router = Router();

router.post("/signup",authController.signup);
router.post("/signin",authController.signin);
router.post("/upload",upload.single("image"),(req,res)=>{
    try {
        res.send("Done")
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

module.exports = router;
