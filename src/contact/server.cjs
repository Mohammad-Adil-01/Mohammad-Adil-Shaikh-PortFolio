require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

console.log("authdata ",process.env.EMAIL,
process.env.PASS)

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transport.verify((error, success) => {
  if (error) {
    console.error("❌ Nodemailer connection error:");
    console.error(error);
  } else {
    console.log("✅ Nodemailer is ready",success);
  }
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required.",
    });
  }

  try {
    await transport.sendMail({
      from: process.env.EMAIL,

      to: process.env.EMAIL,
      replyTo: email,

      subject: `Portfolio Contact - ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6;">

            <h2>New Contact Message</h2>

            <p>
              <strong>Name:</strong> ${name}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <blockquote
              style="
                border-left: 4px solid #333;
                padding-left: 15px;
                color: #555;
              "
            >
              ${message}
            </blockquote>

            <hr />

            <p>
              Sent from your portfolio contact form.
            </p>

          </body>
        </html>
      `,
    });

    console.log(`✅ Email sent successfully from ${email}`);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("❌ EMAIL ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error while sending message.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});