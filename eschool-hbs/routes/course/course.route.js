const express = require("express");
const router = express.Router();
const courseController = require("../../app/Controllers/CourseController");

router.get("/course", courseController.getCourse);
router.get("/course/add", courseController.addCourse);
router.post("/course/add", courseController.addCoursePost);
router.get("/course/edit/:slug", courseController.editCourse);
router.put("/course/edit/:slug", courseController.editCoursePut);
router.delete("/course/delete/:id",courseController.deleteCourse);

module.exports = router;
