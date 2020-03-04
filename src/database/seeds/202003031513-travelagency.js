const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    titre: "voyage en italie",
    lieu: "venise",
    image: "venise",
    prix: 50,
    descriptions: " forza italie",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    titre: "voyage en France",
    lieu: "paris",
    image: "venise",
    prix: 60,
    descriptions: " forza italie",
    created_at: now,
    updated_at: now
  },

  {
    id: uuid(),
    titre: "voyage au maroc",
    lieu: "casablanca",
    image: "venise",
    prix: 40,
    descriptions: " forza italie",
    created_at: now,
    updated_at: now
  }
];
