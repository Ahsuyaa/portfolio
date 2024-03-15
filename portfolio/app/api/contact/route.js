import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { senderEmail, message } = req.body;

    // Validate the email and message (you may add more validation)
    if (!senderEmail || !message) {
      return res.status(400).json({ error: "Email and message are required" });
    }

    // Get email service configuration from environment variables
    const emailConfig = {
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com",
        pass: process.env.EMAIL_PASSWORD || "your-email-password",
      },
    };

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport(emailConfig);

    // Setup email data
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com", // Sender's email address
      to: process.env.RECIPIENT_EMAIL || "example@gmail.com", // Recipient's email address
      subject: "New Message from Contact Form",
      text: `Sender's Email: ${senderEmail}\n\nMessage:\n${message}`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // If the request method is not POST, return an error
  return res.status(405).json({ error: "Method Not Allowed" });
}
