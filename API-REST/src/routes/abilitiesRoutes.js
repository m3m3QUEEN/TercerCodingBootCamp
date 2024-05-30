import express from "express";

import { getAllAbilities, createAbilities } from "../controllers/abilitiesController.js";
import { authenticateToken } from "../utils/usersMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, createAbilities);
router.get("/", authenticateToken, getAllAbilities);

export default router;

