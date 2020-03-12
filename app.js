const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();

var cors = require("cors");
const morgan = require("morgan");
app.use(cors());
app.use(morgan("dev"));
const route = require("./src/routes");

app.use(express.static("assets"));
app.use(bodyParser.json());

app.use("/api", route);
//app.use(bodyParser.urlencoded({ extended: false }));//

app.listen(8080, function() {
  console.log("listen on port 8080");

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "desiree.mohr@ethereal.email", // generated ethereal user
        pass: "xGPsRnC2NseuCEJE2S" // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "boujemaouibilel@gmail.com", // sender address
      to: "desiree.mohr@ethereal.email",
      replyTo: "boujemaoui@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "yoo", // plain text body
      html: "sava" // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
});
