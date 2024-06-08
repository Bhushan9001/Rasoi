const prisma = require("../prisma");


const recipeController = {
  addRecipe: async (req, res) => {
    try {
      const { title, description, type, cuisine, instruction, ingredients } = req.body;
      const authorId = req.user.id;
      const createdRecipe = await prisma.recipe.create({
        data: {
          title,
          description,
          type,
          cuisine,
          instruction: instruction,
          ingredients: ingredients,
          imageurl: req.file.path,
          author: { connect: { id: authorId } },
          authorName: req.user.name,
        }
      });

      res.status(201).json({ "message": "Recipe added Successfully", createdRecipe })
      console.log('Recipe created:', createdRecipe);

    }
    catch (error) {
      console.log(error);
      res.status(501).json({ "message": "Internal server error", error })
    }
  },
  updateRecipe: async (req, res) => {

    try {
      const { title, description, type, cuisine, instruction, ingredients, imageurl } = req.body
      const id = req.params.id;

      const updatedRecipe = await prisma.recipe.update({
        where: { id: id },
        data: {
          title,
          description,
          type,
          cuisine,
          instruction,
          ingredients,
          imageurl,
        }

      })

      res.status(201).json({ "Message": "Recipe Updated Successfully", updatedRecipe });

    } catch (error) {
      console.log(error);
      res.status(501).json({ "message": "Internal server error", error })
    }
  },

  deleteRecipe: async (req, res) => {
    try {
      const { id } = req.params;

      await prisma.recipe.delete({
        where: { id: id }
      })

      res.status(201).json({ "Message": "Recipe Deleted Successfully!!" });

    } catch (error) {
      console.log(error);
      res.status(501).json({ "Message": "Internal Server Error", error });
    }
  },

  getAllRecipe: async(req,res)=>{
      try {
        const recipes = await prisma.recipe.findMany();
        if(recipes.length==0) return res.status(401).json({"Message":"There are no Recipes!!"})
        res.status(201).json({recipes});

    } catch (error) {
      console.log(error);
      res.status(501).json({ "Message": "Internal Server Error", error })
    }

  },
  getRecipeById: async (req, res) => {
    try {
        const {id} = req.params;
        const recipe = await prisma.recipe.findUnique({
          where:{
            id:id
          },
          include: {
            comments: {
              include: {
                author: true, // Include the author details of each comment
              },
            },
            author: true, // Include the author details of the recipe
          }
        })
        if(!recipe) res.status(401).json({"Message":"No Recipe Found!!"});
        res.status(201).json({recipe});
    } catch (error) {
      console.log(error);
      res.status(501).json({ "Message": "Internal Server Error", error })
    }
  },
  

}

const filterController = {
  createdByUser: async (req, res) => {

    const { id } = req.params;

    try {
      const userRecipes = await prisma.recipe.findMany({
        where: {
          authorId: id
        }
      })
      res.status(201).json(userRecipes);
    } catch (error) {
      console.log(error);
      res.status(501).json({ "Message": "Internal Server Error", error });
    }
  },
  searchByTitle: async(req,res)=>{
    try {
      const {query} = req.query;
      const recipes = await prisma.recipe.findMany({
        where:{
          title:{
            contains:query,
            mode:"insensitive"
          }
        },
      })
      if(recipes.length==0) return res.status(400).json({"Message":"No recipe with this title!!"});

      res.status(201).json({recipes});

    } catch (error) {
      console.log(error);
      res.status(501).json({ "Message": "Internal Server Error", error });
    }

  },
  filterByIngredients:async(req,res)=>{
    try {
      const {ingredients} = req.query;

      const ingredientArray = ingredients.split(',').map(ingredient => ingredient.trim());
      const recipes = await prisma.recipe.findMany({
        where:{
          ingredients:{
            some:{
              name:{
                in:ingredientArray,
                mode:"insensitive"
              }
            }
          }
        },
      })
      if(recipes.length==0) return res.status(400).json({"Message":"No recipe with this ingredients!!"});
      res.status(201).json({recipes});
      
    } catch (error) {
      console.log(error);
      res.status(501).json({ "Message": "Internal Server Error", error });
    }
  }
}

module.exports = { recipeController, filterController }