const express = require("express");
const router = express.Router();
const authController = require("../../app/Controllers/AuthController");

router.get("/login", authController.login);
router.get("/register", authController.register);

module.exports = router;
