const express = require("express");
const router = express.Router();
const journalpostsController = require("../controllers/journalposts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, journalpostsController.getJournalPost);

router.get("/getfavoriteJournalPost/:id", journalpostsController.getfavoriteJournalPost);

router.post("/createJournalPost", journalpostsController.createJournalPost);

router.put("/favoriteJournalPost/:id", journalpostsController.favoriteJournalPost);

router.delete("/deleteJournalPost/:id", journalpostsController.deleteJournalPost);

module.exports = router;
