import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, text, html }) => {
  if (!process.env.SMTP_USER) return console.log("⚠️ SMTP non configuré");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({ from: process.env.SMTP_USER, to, subject, text, html });
};
export default sendEmail;
