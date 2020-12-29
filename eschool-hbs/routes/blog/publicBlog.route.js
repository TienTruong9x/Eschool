const express = require("express");
const router = express.Router();
const publicController = require("../../app/Controllers/PublicController");

router.get("/blog-standard",publicController.getStandardBlog);
router.get("/blog-three-column",publicController.getThreeBlog);
router.get("/blog-single",publicController.getSingleBlog);

module.exports = router;
