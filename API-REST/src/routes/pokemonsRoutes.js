import express from "express"
import { createPokemons, getAllPokemons, deletePokemons, updatePokemons } from "../controllers/pokemonsController.js";

const router = express.Router()

router.post("/", createPokemons);
router.get("/", getAllPokemons);
router.delete("/:id", deletePokemons)
router.put("/:id", updatePokemons )

export default router;

