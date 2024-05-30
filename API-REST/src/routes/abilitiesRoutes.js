import express from "express";

import { getAllAbilities, createAbilities, updateAbilities, deleteAbility, deleteAbilities } from "../controllers/abilitiesController.js";

const router = express.Router();

router.post("/", createAbilities);
router.get("/", getAllAbilities);
router.put("/", updateAbilities);

export default router;

