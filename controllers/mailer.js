const transporter = require("../config/nodemailer-config");
const cron = require("node-cron");
require("dotenv").config();

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

let reminderMail = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: "Daily reminder to respond to interested adopters",
  text:
    "This is your daily reminder to respond to interested adopters. Let's get these pups a forever home! 🐶 ",
};

cron.schedule("* * * * *", () => {
  transporter.sendMail(reminderMail, (err, info) => {
    err ? console.log(err) : console.log("Email sent: " + info.response);
  });
});

module.exports = { sendMessage };
