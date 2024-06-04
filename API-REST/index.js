import express from "express";
import connection from "./DBConnection.js"; // Asegúrate de ajustar la ruta de acuerdo a la ubicación de tu archivo de conexión
import cookieParser from "cookie-parser";
const app = express();
const port = 3001;

// const userRouter = require("./src/routes/usersRoutes.js");
// Usar el router de usuarios
import userRoutes from "./src/routes/usersRoutes.js";
import typesRoutes from "./src/routes/typesRoutes.js";
import abilitiesRoutes from "./src/routes/abilitiesRoutes.js";
import pokemonRoutes from "./src/routes/pokemonsRoutes.js";

app.use(express.json()); // Para parsear JSON en las peticiones
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/types", typesRoutes);
app.use("/abilities", abilitiesRoutes);
app.use("/pokemons", pokemonRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;
