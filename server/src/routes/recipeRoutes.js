const {Router} = require('express');
const {recipeController, filterController} = require('../controllers/recipeController');
const passport = require('passport');
const router = Router();
const upload=require('../middleware/uploadImage');




router.post("/addRecipe",passport.authenticate('jwt', { session: false }),upload.single('image'),recipeController.addRecipe);
router.put("/updateRecipe/:id",passport.authenticate('jwt', { session: false }),recipeController.updateRecipe);
router.delete("/deleteRecipe/:id",passport.authenticate('jwt',{session:false}),recipeController.deleteRecipe);
router.get("/getRecipes",recipeController.getAllRecipe);
router.get("/getRecipes/:id",recipeController.getRecipeById);
router.get("/search",filterController.searchByTitle);
router.get("/filter",filterController.filterByIngredientsAndCuisine);


//Filter Routes
router.get("/userRecipes/:id",passport.authenticate('jwt',{session:false}),filterController.createdByUser);
module.exports = router;