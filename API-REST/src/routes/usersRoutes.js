
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

router.get("/", getAllUsers);
router.post("/register", createUser);

export default router;