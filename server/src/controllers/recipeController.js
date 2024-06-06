const prisma = require("../prisma");

const recipeController = {
  addRecipe : async(req,res)=>{
       try {
        const{title,description,type,cuisine,instruction,ingredients} = req.body

        const imageurl = req.file ? `/images/${req.body.filename}`:" ";
        console.log(imageurl)


        const authorId = req.user.id;        
        const recipe = await prisma.recipe.create({
          data:{
            title,
            description,
            type,
            cuisine,
            instruction,
            ingredients,
            imageurl,
            author:{
              connect:{
                id:authorId
              }
            }
          }
          
        })

        res.status(201).json({"message":"Recipe added Successfully",recipe})
        
       } catch (error) {
          console.log(error);
          res.status(501).json({error,"msg":"Internal Server Error"})
       }
  },
  updateRecipe : async(req,res)=>{

    try {
      const{title,description,type,cuisine,instruction,ingredients,imageurl} = req.body
      const id = req.params.id;

      const updatedRecipe = await prisma.recipe.update({
        where:{id:id},
        data:{
          title,
          description,
          type,
          cuisine,
          instruction,
          ingredients,
          imageurl,
        }

      })

      res.status(201).json({"Message":"Recipe Updated Successfully",updatedRecipe});

    } catch (error) {
      console.log(error);
      res.status(501).json({"message":"Internal server error",error})
    }
  },

  deleteRecipe: async(req,res)=>{
    try {
      const {id} = req.params;

       await prisma.recipe.delete({
        where:{id:id}
      })

      res.status(201).json({"Message":"Recipe Deleted Successfully!!"});

    } catch (error) {
      console.log(error);
      res.status(501).json({"Message":"Internal Server Error",error});
    }
  },

  getAllRecipe: async(req,res)=>{
      try {
        const recipes = await prisma.recipe.findMany();
        if(recipes.length==0) res.status(401).json({"Message":"There are no Recipes!!"})
        res.status(201).json({recipes});

      } catch (error) {
        console.log(error);
        res.status(501).json({"Message":"Internal Server Error",error})
      }

  },
  getRecipeById: async(req,res)=>{
    try {
        const {id} = req.params;
        const recipe = await prisma.recipe.findUnique({
          where:{
            id:id
          }
        })
        if(!recipe) res.status(401).json({"Message":"No Recipe Found!!"});
        res.status(201).json({recipe});
    } catch (error) {
      console.log(error);
      res.status(501).json({"Message":"Internal Server Error",error})
    }
  }

}

const filterController = {
  createdByUser : async(req,res)=>{

    const {id} = req.params;

    try {
      const userRecipes = await prisma.recipe.findMany({
        where:{
          authorId:id
        }
      })
      res.status(201).json(userRecipes);
    } catch (error) {
      console.log(error);
      res.status(501).json({"Message":"Internal Server Error",error});
    }
  }
}

module.exports = {recipeController,filterController}