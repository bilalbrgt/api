const express = require("express");
require("express-async-errors");

const {
  mesdestinations,
  recupererUneDestinations
} = require("../Controllers/reservations");

const { OK } = require("../database/helpers/errors/status_code");

const router = express.Router();

router.get("/", async (request, response) => {
  const travelagency = await mesdestinations();

  response.status(OK);
  response.json(travelagency);
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const appartement = await recupererUneDestinations(id);

  response.status(OK);
  response.json(travelagency);
});

module.exports = router;
