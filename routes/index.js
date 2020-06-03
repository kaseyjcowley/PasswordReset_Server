var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.post("/reset-password", function (req, res, next) {
  const transporter = nodemailer.createTransport({
    host: "YOUR_HOST_HERE",
    port: 0000,
    auth: {
      user: "YOUR_USER",
      pass: "YOUR_PASS",
    },
  });

  const link = "http://localhost:3000/reset-password-verification";

  const mailOptions = {
    from: `admin@somesite.com`,
    to: req.body.email,
    subject: "Reset your password",
    text: `Hey, you want to reset your password? Click this link: ${link}`,
  };

  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", res);
    }
  });
});

router.get("/reset-password-verification", (req, res, next) => {
  // Do your verification here
  res.redirect("pwreset://reset-password");
});

module.exports = router;
