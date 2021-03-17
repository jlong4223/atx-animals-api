const transporter = require("../config/nodemailer-config");
const cron = require("node-cron");
require("dotenv").config();

/* -------------- Contact Form Data from React EmailState ------------ */
const sendMessage = (req, res, next) => {
  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message From: ${req.body.emailState.name} within ATX Animals API`,
    text: `${req.body.emailState.message}. Please respond to this email: ${req.body.emailState.email}`,
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

/* -------------- Daily Reminder Email ------------ */
let reminderMail = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: "Daily reminder to respond to interested adopters",
  text:
    "This is your daily reminder to respond to interested adopters. Let's get these pups a forever home! 🐶 ",
};

/* ---- reminder email is sent M-F at 11:30am CST  -----*/
cron.schedule("30 11 * * 1-5", () => {
  transporter.sendMail(
    reminderMail,
    (err, info) => {
      err ? console.log(err) : console.log("Email sent: " + info.response);
    },
    {
      scheduled: true,
      timezone: "America/Chicago",
    }
  );
});

module.exports = { sendMessage };
