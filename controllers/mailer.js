const transporter = require("../config/nodemailer-config");
// require("dotenv").config();

// TODO change the mailOptions to equal req.body from react
const sendMessage = (req, res, next) => {
  let mailOptions = {
    from: "test@gmail.com",
    to: process.env.EMAIL,
    subject: `Message From: within ATX Animals API`,
    text: `$says, test`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    err
      ? res.json({
          status: "fail",
        })
      : res.json({
          status: "success",
        });
  });
};

module.exports = { sendMessage };
