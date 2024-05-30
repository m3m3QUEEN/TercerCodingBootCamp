// src/routes/usersRoutes.js

import express from "express";

import { createUser, getAllUsers } from "../controllers/usersController.js";

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get("/", getAllUsers);

// Ruta para registrar un nuevo usuario
router.post("/register", createUser);

export default router;
