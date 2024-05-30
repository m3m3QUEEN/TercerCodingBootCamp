import express from "express";
import connection from "../../DBConnection.js";



export const getAllAbilities = async (req, res) => {
  try {
    const query = "SELECT * FROM `Abilities`";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error al encontrar la HABILIDAD: " + err);
        res.status(500).send("Error al encontrar las HABILIDADES");
      } else {
        res.send(results);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const createAbilities = async (req, res) => {
  try {
    const { NAME, POWER, accuracy, effect } = req.body;
    const query =
      "INSERT INTO `Abilities`(`NAME`, `POWER`, `accuracy`,`effect`) VALUES (?,?,?,?)";

    connection.query(
      query,
      [NAME, POWER, accuracy, effect],
      (err, results) => {
        if (err) {
          console.error("Error al Ingresar la ABILITITES: ", err);
          res.status(500).send("Error en la tabla ABILITIES");
        } else {
          res.send("Abilitie creada");
          console.log("La habilidad se ha registrado exitosamente.");
        }
        
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const updateAbilities = async (req, res) => {
  try {
    const { id, NAME, POWER, accuracy, effect } = req.body;
    const query =
      "UPDATE `Abilities` SET `NAME` = ?, `POWER` = ?, `accuracy` = ?, `effect` = ? WHERE `id` = ?";

    connection.query(
      query,
      [NAME, POWER, accuracy, effect, id],
      (err) => {
        if (err) {
          console.error("Error al actualizar la ABILITIES: ", err);
          res.status(500).send("Error en la tabla ABILITIES");
        } else {
          res.send("Habilidad actualizada exitosamente");
          console.log("La habilidad se ha actualizado exitosamente.");
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error en la petición a la base de datos",
    });
  }
};


