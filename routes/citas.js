

const express = require("express");
const router = express.Router({ mergeParams: true });

const {getCitas} = require("../controllers/citas");
const {protect } = require("../middleware/auth");

router.route("/").get(getCitas);

module.exports = router;




