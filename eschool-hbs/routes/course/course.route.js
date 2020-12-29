const express = require("express");
const router = express.Router();
const courseController = require("../../app/Controllers/CourseController");

router.get("/", courseController.getCourse);
router.get("/add", courseController.addCourse);
router.post("/add", courseController.addCoursePost);
router.get("/edit/:slug", courseController.editCourse);
router.put("/edit/:slug", courseController.editCoursePut);
router.delete("/delete/:id", courseController.deleteCourse);


module.exports = router;
