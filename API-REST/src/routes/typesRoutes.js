// typesRoutes.js

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

router.post("/", createType);
router.get("/", getAllTypes);
router.delete("/:id", deleteType)
router.put("/:id", updateType )

export default router;