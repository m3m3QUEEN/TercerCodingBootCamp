import express from "express";

<<<<<<< HEAD
import { getAllAbilities, createAbilities, updateAbilities, deleteAbility, deleteAbilities } from "../controllers/abilitiesController.js";

const router = express.Router();

router.post("/", createAbilities);
router.get("/", getAllAbilities);
router.put("/", updateAbilities);
=======
import { getAllAbilities, createAbilities } from "../controllers/abilitiesController.js";
import { authenticateToken } from "../utils/usersMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, createAbilities);
router.get("/", authenticateToken, getAllAbilities);
>>>>>>> a0c4dce5da3f9d7f157da722a379251e57554d2e

export default router;

