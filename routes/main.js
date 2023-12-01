const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const indexController = require("../controllers/index");
const journalpostsController = require("../controllers/journalposts");
const homeController = require("../controllers/home");
const healingController = require("../controllers/healing");
const beliefController = require("../controllers/belief");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", indexController.getIndex);
router.get("/profile", ensureAuth, journalpostsController.getProfile);
router.get("/journalentries", ensureAuth, journalpostsController.getJournalentries);
router.get("/home", ensureAuth, homeController.getHome);
router.get("/healing", ensureAuth, healingController.getHealing);
router.get("/home", ensureAuth, beliefController.getUserBelief);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
