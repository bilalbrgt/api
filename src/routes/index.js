const express = require("express");
 
const router = express.Router();

router.use("/reservation", require("./reservations"));

module.exports = router;
