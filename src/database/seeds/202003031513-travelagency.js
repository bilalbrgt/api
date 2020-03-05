const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    titre: "voyage en belgique",
    lieu: "venise",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travelagency-e6d12.appspot.com/o/ribblehead-viaduct-2443085_640.jpg?alt=media&token=8116db5c-027a-47a3-9be8-3a3d09578cd3",
    prix: 400,
    descriptions: " forza italie",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    titre: "voyage en France",
    lieu: "paris",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travelagency-e6d12.appspot.com/o/beach-84533_640.jpg?alt=media&token=fa561bcd-a322-4018-851d-235867636273",
    prix: 60,
    descriptions: " 93",
    created_at: now,
    updated_at: now
  },

  {
    id: uuid(),
    titre: "voyage au maroc",
    lieu: "casablanca",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travelagency-e6d12.appspot.com/o/oia-416135_640.jpg?alt=media&token=01e763cd-fba5-42bc-9c4f-f98cbce3263f",
    prix: 40,
    descriptions: " yooo",
    created_at: now,
    updated_at: now
  }
];
