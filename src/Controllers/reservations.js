const { Reservation } = require("../models");
const uuid = require("uuid/v4");
console.log("model", Reservation);
const reservationController = {
  mesdestinations: async () => {
    const destina = await Reservation.findAll({
      order: [["titre", "ASC"]],
      attributes: ["id", "titre", "lieu", "prix", "descriptions", "image"],
      raw: true
    });

    return destina;
  },
  recupererUneDestinations: async id => {
    const destina = await Reservation.findByPk(id, {
      attributes: ["id", "titre", "lieu", "prix", "descriptions", "image"],
      raw: true
    });
    //if !destina
    // throw new NotFoundError
    return destina;
  }
};

module.exports = reservationController;
