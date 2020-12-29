const express = require("express");
const router = express.Router();
const siteController = require("../app/Controllers/SiteController");

router.get("/About",siteController.aboutUs)
router.get("/Contact",siteController.contact)
router.get("/Our-team",siteController.ourTeam)
router.get("/", siteController.index);

module.exports = router;
