

const express = require("express");
const router = express.Router({ mergeParams: true });

const { login, logout, getLogin,  } = require("../controllers/auth");
const { protect } = require("../middleware/auth");

//protect allows user to navigate certain routes only when logged in
router.route("/login").get(getLogin);
router.route("/login/:username").post(login);
router.route("/logout").get(logout);

module.exports = router;
