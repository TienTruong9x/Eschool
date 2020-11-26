const express = require("express");
const router = express.Router();
const trainerController = require("../../app/Controllers/TrainerController");

router.get("/", trainerController.index);

module.exports = router;
