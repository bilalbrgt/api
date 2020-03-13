require("sqreen");

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();

var cors = require("cors");
const morgan = require("morgan");
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

const route = require("./src/routes");

app.use(express.static("assets"));
app.use(bodyParser.json());

app.use("/api", route);
//app.use(bodyParser.urlencoded({ extended: false }));//

app.listen(8080, function() {
  console.log("listen on port 8080");

  // async..await is not allowed in global scope, must use a wrapper
});
