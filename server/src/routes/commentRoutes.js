const {Router} = require('express');
const passport = require('passport');
const {commentController} = require("../controllers/commentsController")

const router = Router();

router.post("/:recipeId/comments",passport.authenticate('jwt',{session:false}),commentController.addComment);
router.put("/:recipeId/comments/:commentId/likes",passport.authenticate('jwt',{session:false}),commentController.likeComment);
router.put("/:recipeId/comments/:commentId/addReply",passport.authenticate('jwt',{session:false}),commentController.replyOnComment);
router.delete("/comments/:id",passport.authenticate('jwt',{session:false}),commentController.deleteComment);

module.exports = router;