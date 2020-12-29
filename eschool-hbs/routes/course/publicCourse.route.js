const express = require("express");
const router = express.Router();
const publicController = require("../../app/Controllers/PublicController");

router.get("/grid-course",publicController.getGridViewCourse);
router.get("/list-course",publicController.getListViewCourse);
router.get("/single-course",publicController.getSingleViewCourse);

module.exports = router;
