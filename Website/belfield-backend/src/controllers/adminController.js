import asyncHandler from "../middleware/asyncHandler.js";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

// Générer un token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// POST /api/admin/register
export const registerAdmin = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const adminExists = await Admin.findOne({ email });
  if (adminExists) {
    res.status(400);
    throw new Error("Admin déjà existant");
  }
  const admin = await Admin.create({ username, email, password });
  res.status(201).json({
    _id: admin._id,
    username: admin.username,
    email: admin.email,
    token: generateToken(admin._id),
  });
});

// POST /api/admin/login
export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      username: admin.username,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401);
    throw new Error("Email ou mot de passe incorrect");
  }
});

// GET /api/admin/profile
export const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.admin.id);
  if (admin) {
    res.json({
      _id: admin._id,
      username: admin.username,
      email: admin.email,
    });
  } else {
    res.status(404);
    throw new Error("Admin non trouvé");
  }
});
