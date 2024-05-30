import express from "express";
const router = express.Router()

import { createPokemons, deletePokemons, getAllPokemons, updatePokemons } from "../controllers/pokemonsController.js";

router.post("/", createPokemons);
router.get("/", getAllPokemons);
router.put("/", updatePokemons);
router.delete("/", deletePokemons);

export default router;
