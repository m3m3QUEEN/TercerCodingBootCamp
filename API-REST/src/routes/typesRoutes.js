import express from "express";

import {
  createType,
  getAllTypes,
  deleteType,
  updateType,
} from "../controllers/typesController.js";
import { authenticateToken } from "../utils/usersMiddleware.js";
import { adminRolValidation } from "../utils/usersMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, adminRolValidation, createType);
router.get("/", authenticateToken, getAllTypes);
router.delete("/:id", authenticateToken, adminRolValidation, deleteType);
router.put("/:id", authenticateToken, adminRolValidation, updateType);

export default router;
