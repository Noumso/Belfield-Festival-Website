import express from "express";
import { registerAdmin, loginAdmin, getAdminProfile } from "../controllers/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerAdmin); // Créer un admin
router.post("/login", loginAdmin);       // Se connecter
router.get("/profile", protectAdmin, getAdminProfile); // Info admin protégé

export default router;
