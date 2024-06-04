import express from "express";
import connection from "../../DBConnection.js";
import { userSchema } from "../utils/schemas.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export const getAllUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM `Users`";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error al encontrar los usuarios: " + err);
        res.status(500).send("Error al encontrar los usuarios");
      } else {
        res.send(results);
      }
    });
  } catch (error) {
    console.error(error, "error");
    res.status(500).json({
      mensaje: "error en la petición a la base de datos",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, password, role } = req.body; 
    const emailQuery = "SELECT * FROM `Users` WHERE `email` = ?";
    connection.query(emailQuery, [email], async (err, results) => {
      if (err) {
        console.error("Error al verificar el email: ", err);
        return res.status(500).send("Error al verificar el email");
      }

      if (results.length > 0) {
        return res.status(400).json({
          mensaje: "El email ya está registrado",
        });
      }

      // Hash de la contraseña antes de almacenarla
      const hashedPassword = await bcrypt.hash(password, 10);
      const query =
        "INSERT INTO `Users`(`email`, `password`, `role`) VALUES (?, ?, ?)";

      connection.query(
        query,
        [email, hashedPassword, role],
        (err, results) => {
          if (err) {
            console.error("Error al crear usuario: ", err);
            return res.status(500).send("Error al crear usuario");
          } else {
            res.send("Usuario creado");
            console.log("Usuario registrado exitosamente.");
          }
        }
      );
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error del servidor");
  }
};

const JWT_SECRET = "your_secret_key";

export const login = async (req, res) => {
  console.log("Login request received");
  try {
    const { email, password } = req.body;
    console.log(`Email: ${email}, Password: ${password}`);
    
    const query = "SELECT * FROM `Users` WHERE `email` = ?";

    connection.query(query, [email], async (err, results) => {
      if (err) {
        console.error("Error al realizar el inicio de sesión: ", err);
        res.status(500).send("Error al realizar el inicio de sesión");
      } else {
        if (results.length === 0) {
          res.status(401).send("Credenciales incorrectas");
        } else {
          const user = results[0];
          console.log(`User fetched from DB: ${JSON.stringify(user)}`);
          const isCorrectPassword = await bcrypt.compare(password, user.password);
          console.log(`Password comparison result: ${isCorrectPassword}`);
          if (isCorrectPassword) {
            const sessionId = uuidv4();
            const token = jwt.sign({ userId: user.id }, JWT_SECRET);
            res.cookie("token", token, { httpOnly: true });
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
    res.clearCookie("token");
    res.send("Sesión cerrada exitosamente");
    console.log("Sesión cerrada exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al cerrar sesión",
    });
  }
};
