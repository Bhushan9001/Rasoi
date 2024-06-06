const { json } = require('body-parser');
const prisma  = require('../prisma');

const commentController = {
    addComment: async(req,res)=>{
        try {
            const {recipeId} = req.params;
            const authorId = req.user.id;
            const {text} = req.body;
            const comment = await prisma.comments.create({
                data:{
                    text,
                    recipe: { connect: { id: recipeId } },
                    author: { connect: { id: authorId } },
                }
            })

            if(!comment) return res.status(400).json({"Message":"Error While Creating Comments!!"});

            res.status(201).json({"Message":"Comment Added Succesfully",comment});

        } catch (error) {
            console.log(error);
            res.status(501).json({"Message":"Internal Server Error",error});
        }

    },
    deleteComment: async(req,res)=>{
        try {
            const{id} = req.params;
            await prisma.comments.delete({where:{id:id}}).then(()=>{
                res.status(201).json({"Message":"Comment Deleted Successfully!!"});
            })
            .catch((e)=>{
                res.status(400).json({"Message":"Error While Deleteing Comment",e});
            })

        } catch (error) {
            console.log(error);
            res.status(501).json({"Message":"Internal Server Error",error});
        }
    }
}

module.exports = {commentController};