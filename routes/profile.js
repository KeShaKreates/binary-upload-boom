const express = require("express");
const router = express.Router();
const userController = require("../controllers/auth");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Profile Routes - simplified for now
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;