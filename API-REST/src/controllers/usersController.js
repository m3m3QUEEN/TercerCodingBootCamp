// endpoints/users.js

import express from "express";
import connection from "../../DBConnection.js"; // Asegúrate de ajustar la ruta de acuerdo a la ubicación de tu archivo de conexión

export const getAllUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM `USUARIOS`";
    await connection.query(query, (err, results) => {
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
    const { email, password, confirmPassword, role } = req.body;
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;

    if (!email || !password || !role) {
      res.status(400).json({
        mensaje: "toda la información es necesaria",
      });
    }

    if (!regex.test(password)) {
      res.status(400).json({
        mensaje:
          "Contraseña Inválida, debe contener al menos mínimo con 5 carácteres, un número y un carácter en mayúscula",
      });
    }

    if (password !== confirmPassword) {
      res.status(401).json({
        mensaje: "Las contraseñas no coinciden",
      });
    }

    const query =
      "INSERT INTO `Users`(`email`, `password`, `role`) VALUES (?, ?, ?)";

    await connection.query(query, [email, password, role], (err, results) => {
      if (err) {
        console.error("Error al crear usuario: ", err);
        res.status(500).send("Error al crear usuario");
      } else {
        res.send("Usuario creado");
        console.log("Usuario registrado exitosamente.");
      }
    });
  } catch (error) {
    console.error(error);
  }
};
