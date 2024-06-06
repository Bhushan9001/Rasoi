const {Router} = require('express');
const {recipeController, filterController} = require('../controllers/recipeController');
const passport = require('passport');
const upload = require('../middleware/uploadImage');
const router = Router();

router.post("/addRecipe",passport.authenticate('jwt', { session: false }),upload.single('image'),recipeController.addRecipe);
router.put("/updateRecipe/:id",passport.authenticate('jwt', { session: false }),recipeController.updateRecipe);
router.delete("/deleteRecipe/:id",passport.authenticate('jwt',{session:false}),recipeController.deleteRecipe);
router.get("/getRecipes",recipeController.getAllRecipe);
router.get("/getRecipes/:id",recipeController.getRecipeById);

//Filter Routes
router.get("/userRecipes/:id",passport.authenticate('jwt',{session:false}),filterController.createdByUser);
module.exports = router;