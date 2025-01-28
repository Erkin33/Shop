import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { customerInfo, cart } = req.body;

    // Создаём транспорт для отправки email
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, // или 587
        secure: true, // для порта 465, для порта 587 - false
        auth: {
          user: process.env.EMAIL_USER, // Ваш email
          pass: process.env.EMAIL_PASS, // Ваш пароль или app password
        },
      });
      

    const orderSummary = cart
      .map((item) => `${item.name} x ${item.quantity} - $${item.totalPrice}`)
      .join("\n");

    const mailOptions = {
      from: "your-email@gmail.com",
      to: customerInfo.email,
      subject: "Your Order Confirmation",
      text: `Thank you for your order, ${customerInfo.name}!\n\nHere are your order details:\n${orderSummary}\n\nTotal: $${cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      )}\n\nWe will ship your order to: ${customerInfo.address}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
