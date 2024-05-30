// index.js

import express from "express";
import connection from "./DBConnection.js"; // Ajustado para que sea relativo a index.js

const app = express();
const port = 3000;

// Importar rutas usando rutas relativas correctas
import userRoutes from "./src/routes/usersRoutes.js";
import typesRoutes from "./src/routes/typesRoutes.js";
import pokemonsRoutes from "./src/routes/pokemonsRoutes.js"; // Corregido, debería tener el prefijo './'

app.use(express.json()); // Para parsear JSON en las peticiones

app.use("/users", userRoutes);
app.use("/types", typesRoutes);
app.use("/pokemons", pokemonsRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

export default app;
