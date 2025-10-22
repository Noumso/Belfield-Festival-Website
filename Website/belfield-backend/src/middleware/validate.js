export const validateArtist = (req, res, next) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "Le nom de l'artiste est requis" });
  }
  next();
};

export const validateEvent = (req, res, next) => {
  const { title, date } = req.body;
  if (!title || !date) {
    return res.status(400).json({ message: "Titre et date requis pour l'événement" });
  }
  next();
};

export const validateTicket = (req, res, next) => {
  const { purchaserEmail, quantity, type } = req.body;
  if (!purchaserEmail || !quantity || !type) {
    return res.status(400).json({ message: "Email, quantité et type requis pour le billet" });
  }
  next();
};

export const validateVolunteer = (req, res, next) => {
  const { firstName, email } = req.body;
  if (!firstName || !email) {
    return res.status(400).json({ message: "Prénom et email requis" });
  }
  next();
};

export const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Nom, email et message requis" });
  }
  next();
};
