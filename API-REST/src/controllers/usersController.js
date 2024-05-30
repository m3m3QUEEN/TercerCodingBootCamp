import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import connection from "../../DBConnection.js";
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());
app.use(cookieParser());

const JWT_SECRET = "your_secret_key"; // Cambia esto por una clave secreta segura en un entorno de producción

export const login = async (req, res) => {
  try {
    const { EMAIL, PASSWORD } = req.body;
    
    const query = "SELECT * FROM `USUARIOS` WHERE `EMAIL` = ?";
    
    await connection.query(query, [EMAIL], (err, results) => {
      if (err) {
        console.error("Error al realizar el inicio de sesión: ", err);
        res.status(500).send("Error al realizar el inicio de sesión");
      } else {
        if (results.length === 0) {
          res.status(401).send("Credenciales incorrectas");
        } else {
          const user = results[0];
          if (user.PASSWORD === PASSWORD) {
            const sessionId = uuidv4();
            const token = jwt.sign({ userId: user.id }, JWT_SECRET); // Generar token JWT
            res.cookie("token", token, { httpOnly: true }); // Establecer el token en una cookie
            res.send({ message: "Inicio de sesión exitoso", sessionId });
            console.log("Usuario ha iniciado sesión exitosamente.");
          } else {
            res.status(401).send("Credenciales incorrectas");
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error en la petición a la base de datos",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token"); // Borrar la cookie que contiene el token
    res.send("Sesión cerrada exitosamente");
    console.log("Sesión cerrada exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al cerrar sesión",
    });
  }
};
