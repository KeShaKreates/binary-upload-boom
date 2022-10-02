const express = require("express");
const router = express.Router();
const journalsController = require("../controllers/journals");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Journal Routes - simplified for now
router.get("/:id", ensureAuth, journalsController.getJournal);

router.post("/createJournal", journalsController.createJournal);

module.exports = router;