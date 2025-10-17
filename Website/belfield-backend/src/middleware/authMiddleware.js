import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import Admin from "../models/Admin.js";

export const protectAdmin = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Non autorisé, token invalide");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Non autorisé, pas de token");
  }
});
