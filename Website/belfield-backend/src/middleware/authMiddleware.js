import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import Admin from "../models/adminModel.js";

export const protectAdmin = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select("-password");
      if (!req.admin) {
        res.status(401);
        throw new Error("Admin introuvable");
      }
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Token invalide");
    }
  } else {
    res.status(401);
    throw new Error("Non autorisé, pas de token");
  }
});
