const express = require("express");
const router = express.Router();
const projectController = require("../../app/Controllers/ProjectController");

router.get("/", projectController.getProjects);
router.get("/add", projectController.addProjects);
router.post("/add", projectController.addProjectsPost);
router.get("/edit/:slug", projectController.editProjects);
router.put("/edit/:slug", projectController.editProjectsPut);
router.delete("/delete/:id", projectController.deleteProjects);

module.exports = router;
