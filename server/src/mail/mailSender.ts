const nodemailer = require("nodemailer");
require("dotenv").config();

export const sendMail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: "gurunggs112@gmail.com",
        pass: "x e v h h u r h e h c i q g l a",
      },
    });

    const mailOptions = {
      from: email,
      to: "sawmeerz1@gmail.com",
      subject: subject,
      text: text,
    };
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  } catch (e) {
    console.log(e);
  }
};
