import express from "express";
import {
  createAbilities,
  getAllAbilities,
} from "../controllers/abilitiesController.js";
import { authenticateToken } from "../utils/usersMiddleware.js";
import { adminRolValidation } from "../utils/usersMiddleware.js";
import { abilitySchema } from "../utils/schemas.js";

const router = express.Router();

router.post("/", authenticateToken, adminRolValidation, (req, res, next) => {
  const { error } = abilitySchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}, createAbilities);

router.get("/", authenticateToken, getAllAbilities);

export default router;
