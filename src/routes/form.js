const express = require("express");
require("express-async-errors");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);
  sendEmail(data);
  res.status(201).send(data);
});
async function sendEmail(data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bouakimjawed@gmail.com",
      pass: "brgt93350lol"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: data.email, // sender address
    to: "bouakimjawed@gmail.com",
    replyTo: data.email, // list of receivers
    subject: data.name, // Subject line
    text: data.message, // plain text body
    html: data.message // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
module.exports = router;
