const express = require("express");

const router = express.Router();

router.use("/reservation", require("./reservations"));
router.use("/form", require("./form"));
module.exports = router;
