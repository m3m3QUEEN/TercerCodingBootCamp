// endpoints/users.js

import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import connection from "../../DBConnection.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const getAllUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM `Users`";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error al obtener todos los usuarios: " + err);
        res.status(500).send("Error al obtener todos los usuarios");
      } else {
        res.send(results);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// Funcion para comparar contraseñas
const comparePasswords = async (plainPassword, hashedPassword) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;

    if (!email || !password) {
      return res.status(400).json({
        mensaje: "Toda la información es necesaria",
      });
    }
    const role = "user";
    if (!regex.test(password)) {
      return res.status(400).json({
        mensaje:
          "Contraseña Inválida, debe contener al menos mínimo con 5 caracteres, un número y un carácter en mayúscula",
      });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({
        mensaje: "Las contraseñas no coinciden",
      });
    }

    const emailQuery = "SELECT * FROM `Users` WHERE `email` = ?";
    connection.query(emailQuery, [email], async (err, results) => {
      if (err) {
        console.error("Error al buscar usuario: " + err);
        return res.status(500).json({ message: "Error en el servidor" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Credenciales invalidas" });
      }
      const hashedPassword = bcrypt.hash(password, 10);

      const query =
        "INSERT INTO `Users`(`email`, `password`, `role`) VALUES (?, ?, ?)";

      connection.query(query, [email, hashedPassword, role], (err, results) => {
        if (err) {
          console.error("Error al crear usuario: ", err);
          return res.status(500).send("Error al crear usuario");
        } else {
          res.send("Usuario creado");
          console.log("Usuario registrado exitosamente.");
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

const JWT_SECRET = "your_secret_key";

export const login = async (req, res) => {  
  try {
    const { EMAIL, PASSWORD } = req.body;

    const query = "SELECT * FROM `Users` WHERE `EMAIL` = ?";

    await connection.query(query, [EMAIL], (err, results) => {
      if (err) {
        console.error("Error al crear usuario: ", err);
        res.status(500).send("Error al crear usuario");
      } else {
        if (results.length === 0) {
          res.status(401).send("Credenciales incorrectas");
        } else {
          const user = results[0];
          const isCorrectPassword = bcrypt.compare(password, user.password);
          if (isCorrectPassword) {
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