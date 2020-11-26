const express = require("express");
const router = express.Router();
const trainerController = require("../../app/Controllers/TrainerController");

router.get("/", trainerController.getTrainer);
router.get("/add", trainerController.addTrainer);
router.post("/add", trainerController.addTrainerPost);
router.get("/edit/:slug", trainerController.editTrainer);
router.put("/edit/:slug", trainerController.editTrainerPut);
router.delete("/delete/:id", trainerController.deleteTrainer);

module.exports = router;
