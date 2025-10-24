import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export const sendEmail = async ({ to, subject, text, html }) => {
  const data = {
    from: process.env.MAIL_FROM,
    to,
    subject,
    text,
    html,
  };

  try {
    const body = await mg.messages().send(data);
    console.log("📧 Email envoyé :", body);
    return body;
  } catch (error) {
    console.error("❌ Erreur Mailgun :", error);
    throw new Error("Échec de l'envoi d'email");
  }
};
