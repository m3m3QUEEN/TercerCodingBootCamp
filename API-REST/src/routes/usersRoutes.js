import express from "express";
import { adminRolValidation } from "../utils/usersMiddleware.js";
import { authenticateToken } from "../utils/usersMiddleware.js";

import {
  createUser,
  getAllUsers,
  login,
  logout,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/", authenticateToken, adminRolValidation, getAllUsers);
router.post("/", authenticateToken, adminRolValidation, createUser);
router.post("/login", login);
router.post("/logout", logout);

export default router;
