

const express = require("express");
const router = express.Router({ mergeParams: true });

const {getIndex, sMail} = require("../controllers/index");
const {protect} = require("../middleware/auth");

router.route("/").get(getIndex);

module.exports = router;




