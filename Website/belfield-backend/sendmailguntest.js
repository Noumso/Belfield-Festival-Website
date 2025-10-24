import Mailgun from "mailgun.js";
import formData from "form-data";
import dotenv from "dotenv";

dotenv.config();

const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

async function sendEmail() {
  try {
    const messageData = {
      from: "Mon App <mailgun@" + process.env.MAILGUN_DOMAIN + ">",
      to: "tonemail@exemple.com", // Mets ici ton e-mail pour tester
      subject: "Test Mailgun API 🚀",
      text: "Félicitations, tu envoies un e-mail avec l’API Mailgun !",
    };

    const response = await client.messages.create(process.env.MAILGUN_DOMAIN, messageData);
    console.log("✅ Email envoyé :", response.id);
  } catch (err) {
    console.error("❌ Erreur :", err);
  }
}

sendEmail();
