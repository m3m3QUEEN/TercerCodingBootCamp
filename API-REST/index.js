// index.js

import express from 'express';
import usersRouter from './Endpoints/Users.js';
import connection from './DB/DBConnection.js'; // Asegúrate de ajustar la ruta de acuerdo a la ubicación de tu archivo de conexión
import 
const app = express();
const port = 3000;

app.use(express.json()); // Para parsear JSON en las peticiones

// Usar el router de usuarios
app.use(usersRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

export default app;
