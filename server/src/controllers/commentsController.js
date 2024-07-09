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
                    likes:0,
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
    },
    likeComment: async(req,res)=>{
       try {
        const {commentId} = req.params;
        const {recipeId} = req.params;
        const updatedComment = await prisma.comments.update({
            where:{id:commentId,
                recipeId:recipeId},
            data:{
                likes:{
                    increment: 1,
                }
            }
        })
         res.status(201).json({"message":"Liked a Comment",updatedComment});
       } catch (error) {
        console.log(error);
        res.status(501).json({"Message":"Internal Server Error",error});
       }
    },
    replyOnComment : async(req,res)=>{
        try {
            const{recipeId,commentId} = req.params;
            const {reply} = req.body;
            
            const updatedComment = await prisma.comments.update({
                where:{id:commentId , recipeId:recipeId},
                data:{
                    replies:{
                        push:{
                            text:reply,
                            authorName: req.user.name
                        }
                    }
                }
            }).catch(e => {
                res.status(401).json({"message":"unable to add reply to this comment" , "error":e})
            }
        )


            res.status(201).json({"Message":"Reply Added Succesfully",updatedComment});

        } catch (error) {
            console.log(error);
            res.status(501).json({"Message":"Internal Server Error",error});
        }
    }
}

module.exports = {commentController};