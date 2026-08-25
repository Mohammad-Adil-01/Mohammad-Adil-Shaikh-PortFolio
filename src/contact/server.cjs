const express = require("express");
const app = express();
const cors = require("cors");
const nodemail = require("nodemailer");

app.use(cors());
app.use(express.json());
const transport = nodemail.createTransport({
  service: "gmail",
  auth: {
    user: "mohammadadil2486@gmail.com",
    pass: "ppjbspwiiwacbyuo",
  },
});

app.get("/", (req, res) => {
  res.send("Contact API is running");
});

// Test contact endpoint in browser
app.get("/contact", (req, res) => {
  res.send("Contact API is running");
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transport.sendMail({
      from: "mohammadadil2486@gmail.com",
      to: email && "mohammadadil2486@gmail.com",
      subject: "Message Received",
      html: `
    <h1>Thank You for Contacting Me</h1>

    <p>Hello <strong>${name}</strong>,</p>

    <p>I received your message:</p>

    <blockquote>${message}</blockquote>

    <p>Your feedback helps me improve my skills.</p>

    <p>Regards,<br>Mohammad Adil Shaikh</p>
  `,
    });

    res.status(201).json({ success: true, message: "Email Sent Successfully" });
    
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error in Sending Message" });
  }
});

app.listen(5000, () => {
  console.log("Nodemialer and Sever is Active");
});
