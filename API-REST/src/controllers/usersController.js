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
    const { EMAIL, PASSWORD, ROLE } = req.body;

    const query =
      "INSERT INTO `USUARIOS`(`EMAIL`, `PASSSWORD`, `ROLE`) VALUES (?,?,?)";

    await connection.query(query, [EMAIL, PASSWORD, ROLE], (err, results) => {
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

export const updateUsers = async (req, res) => {
  try {
    const { id, EMAIL, PASSWORD, ROLE } = req.body;

    const query =
      "UPDATE `USUARIOS` SET `EMAIL` = ?, `PASSWORD` = ?, `ROLE` = ? WHERE `id` = ?";

    connection.query(
      query,
      [EMAIL, PASSWORD, ROLE, id],
      (err, results) => {
        if (err) {
          console.error("Error al actualizar usuario: ", err);
          res.status(500).send("Error al actualizar usuario");
        } else {
          res.send("Usuario actualizado exitosamente");
          console.log("Usuario actualizado exitosamente.");
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};
