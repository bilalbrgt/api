const express = require("express");
const app = express();
var cors = require("cors");
const morgan = require("morgan");
app.use(cors());
app.use(morgan("dev"));
const route = require("./src/routes");

app.use("/api", route);
app.listen(8080, function() {
  console.log("listen on port 8000");
});
