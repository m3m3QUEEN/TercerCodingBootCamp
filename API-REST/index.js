// index.js

import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./src/routes/usersRoutes.js"; // Importa las rutas de usuarios

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes); // Usa las rutas de usuarios

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
