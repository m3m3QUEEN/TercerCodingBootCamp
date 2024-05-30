
import express from "express";

import { createUser, getAllUsers } from "../controllers/usersController.js";
import { updateAbilities } from "../controllers/abilitiesController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", createUser);
router.put("/", updateAbilities)

export default router;