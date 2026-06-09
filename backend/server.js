const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Message",
      text: `
        Name:${name}
        Email:${email}
        Message:${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log("backend erro ", error);
    res.status(500).json({
      success: false,
      message: "Email not sent",
    });
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});