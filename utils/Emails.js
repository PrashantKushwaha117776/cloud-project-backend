const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",                         // MUST be the string "apikey"
    pass: process.env.SENDGRID_API_KEY,     // Your actual SendGrid API key
  },
});

exports.sendMail = async (receiverEmail, subject, body) => {
  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,        // Must be a verified sender in SendGrid
      to: receiverEmail,
      subject: subject,
      html: body,
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};
