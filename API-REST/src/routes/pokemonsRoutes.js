import express from "express";
import {
  createPokemons,
  getAllPokemons,
  deletePokemons,
  updatePokemons,
} from "../controllers/pokemonsController.js";
import { adminRolValidation } from "../utils/usersMiddleware.js";
import { authenticateToken } from "../utils/usersMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, adminRolValidation, createPokemons);
router.get("/", authenticateToken, getAllPokemons);
router.delete("/:id", authenticateToken, adminRolValidation, deletePokemons);
router.put("/:id", authenticateToken, adminRolValidation, updatePokemons);

export default router;