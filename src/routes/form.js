const express = require("express");
require("express-async-errors");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(201).send(data);
});

module.exports = router;
