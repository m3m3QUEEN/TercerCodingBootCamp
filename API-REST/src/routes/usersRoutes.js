// src/routes/usersRoutes.js

import express from "express";
import { getAllUsers, createUser, loginUser, logoutUser } from "../controllers/usersController.js";

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get("/", getAllUsers);

// Ruta para registrar un nuevo usuario
router.post("/register", createUser);

// Ruta para iniciar sesión
router.post("/login", loginUser);

// Ruta para cerrar sesión
router.post("/logout", logoutUser);

export default router;
