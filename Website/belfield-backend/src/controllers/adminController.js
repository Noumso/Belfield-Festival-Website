import asyncHandler from "../middleware/asyncHandler.js";
import Admin from "../models/adminModel.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const registerAdmin = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const exists = await Admin.findOne({ email });
  if (exists) {
    res.status(400);
    throw new Error("Admin already exists");
  }
  const admin = await Admin.create({ username, email, password });
  res.status(201).json({
    _id: admin._id,
    username: admin.username,
    email: admin.email,
    token: generateToken(admin._id),
  });
});

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
    throw new Error("Invalid email or password");
  }
});

export const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.admin._id).select("-password");
  if (!admin) {
    res.status(404);
    throw new Error("Admin not found");
  }
  res.json(admin);
});
