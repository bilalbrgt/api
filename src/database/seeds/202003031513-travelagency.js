const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    titre: "Voyages en Polynesie",
    lieu: "polynesie",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travelagency-e6d12.appspot.com/o/background-2413081_1280.jpg?alt=media&token=2f8821e7-2bde-400f-b475-0b138b61d144",
    prix: 250,
    descriptions: " ",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    titre: "  Mexique ",
    lieu: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travelagency-e6d12.appspot.com/o/quentin-dang-GF5SR2ETysg-unsplash.jpg?alt=media&token=b9c8167b-1b9f-4439-bc5f-223b3da7885c",
    prix: 250,
    descriptions: "",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    titre: "thaiti",
    lieu: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travelagency-e6d12.appspot.com/o/sara-dubler-Koei_7yYtIo-unsplash-compressor.jpg?alt=media&token=eda834b3-23cf-484e-81c1-a2459d462c7a",
    prix: 150,
    descriptions: "  ",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    titre: "mexique",
    lieu: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travelagency-e6d12.appspot.com/o/harry-cunningham-N4bOFvyrXgo-unsplash-compressor.jpg?alt=media&token=cc13efff-f8a8-48fc-870e-4c0ff5a9df16",
    prix: 50,
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
