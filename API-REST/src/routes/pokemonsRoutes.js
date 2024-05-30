
import express from "express"
import { createPokemons, getAllPokemons, deletePokemons, updatePokemons } from "../controllers/pokemonsController.js";

const router = express.Router()

router.post("/", createPokemons);
router.get("/", getAllPokemons);
router.delete("/:id", deletePokemons)
router.put("/:id", updatePokemons )

export default router;

=======
import express from "express";
const router = express.Router()

import { createPokemons, getAllPokemons } from "../controllers/pokemonsController.js";

router.post("/", createPokemons);
router.get("/", getAllPokemons);

export default router;
