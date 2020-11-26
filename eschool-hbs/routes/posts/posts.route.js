const express = require("express");
const router = express.Router();
const postController = require("../../app/Controllers/PostController");

router.get("/", postController.getPosts);
router.get("/add", postController.addPosts);
router.post("/add", postController.addPostsPost);
router.get("/edit/:slug", postController.editPosts);
router.put("/edit/:slug", postController.editPostsPut);
router.delete("/delete/:id", postController.deletePosts);

module.exports = router;
