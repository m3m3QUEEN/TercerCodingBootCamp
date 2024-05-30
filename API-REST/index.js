
import express from "express";
import connection from "./DBConnection.js"; // Asegúrate de ajustar la ruta de acuerdo a la ubicación de tu archivo de conexión
import userRoutes from "./src/routes/usersRoutes.js";
import typesRoutes from "./src/routes/typesRoutes.js";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

// Middleware para verificar el token JWT y autenticar las solicitudes
app.use((req, res, next) => {
  // Obtener el token de la cookie
  const token = req.cookies.token;

  // Verificar si existe el token
  if (token) {
    jwt.verify(token, 'your_secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).send('Token inválido');
      } else {
        req.userId = decoded.userId;
        next(); // Pasar al siguiente middleware
      }
    });
  } else {
    res.status(401).send('Token no proporcionado');
  }
});

// Usar el router de usuarios
app.use(userRoutes);
app.use(typesRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

export default app;
