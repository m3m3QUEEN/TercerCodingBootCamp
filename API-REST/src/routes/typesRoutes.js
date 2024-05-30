// typesRoutes.js

import express from "express";

import { createType, getAllTypes } from "../controllers/typesController.js";

const router = express.Router();

// Ruta para crear un nuevo tipo (requiere autenticacion de administrador)
router.post("/", isAuthenticated, isAdmin, createType);

// Ruta para obtener todos los tipos
router.get("/", getAllTypes);
router.delete("/:id", deleteType)
router.put("/:id", updateType )

export default router;
