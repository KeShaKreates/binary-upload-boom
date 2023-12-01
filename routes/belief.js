const express = require("express");
const router = express.Router();
const beliefController = require("../controllers/belief");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/getUserBelief",  ensureAuth, beliefController.getUserBelief);

module.exports = router;
