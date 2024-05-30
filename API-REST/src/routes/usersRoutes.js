import express from "express";

import { createUser, getAllUsers, DeleteUsers } from "../controllers/usersController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", createUser);
router.delete("/delete",DeleteUsers);
export default router;
