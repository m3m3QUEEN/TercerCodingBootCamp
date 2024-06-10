import express from "express";
import { adminRolValidation } from "../utils/usersMiddleware.js";
import { authenticateToken } from "../utils/usersMiddleware.js";

<<<<<<< HEAD
import { createUser, getAllUsers } from "../controllers/usersController.js";
import { updateAbilities } from "../controllers/abilitiesController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", createUser);
router.put("/", updateAbilities)
=======
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
>>>>>>> a0c4dce5da3f9d7f157da722a379251e57554d2e

export default router;
