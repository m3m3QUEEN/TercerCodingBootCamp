import express from "express";
import connection from "./DBConnection.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 3000;

import userRoutes from "./src/routes/usersRoutes.js";
import typesRoutes from "./src/routes/typesRoutes.js";
import abilitiesRoutes from "./src/routes/abilitiesRoutes.js";
import pokemonRoutes from "./src/routes/pokemonsRoutes.js";

app.use(express.json()); // Para parsear JSON en las peticiones
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/types", typesRoutes);
app.use("/abilities", abilitiesRoutes);
app.use("/pokemons", pokemonRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;
