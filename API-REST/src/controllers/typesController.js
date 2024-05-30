import express from "express";
import connection from "../../DBConnection.js";

export const getAllTypes = async (req, res) => {
  try {
    const query = "SELECT * FROM `Types`";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error al encontrar el TYPE: " + err);
        res.status(500).send("Error al encontrar los TYPES");
      } else {
        res.send(results);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const createType = async (req, res) => {
  try {
    const { name, element, strength, weakness } = req.body;
    const query =
      "INSERT INTO `Types`(`name`, `element`, `strength`,`weakness`) VALUES (?,?,?,?)";

    connection.query(
      query,
      [name, element, strength, weakness ],
      (err, results) => {
        if (err) {
          console.error("Error al Ingresar el TYPE: ", err);
          res.status(500).send("Error en la tabla TYPE");
        } else {
          res.send("Type creado");
          console.log("El TYPE se ha registrado exitosamente.");
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};





   