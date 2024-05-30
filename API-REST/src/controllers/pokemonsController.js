import express from "express";
import connection from "../../DBConnection.js";

export const  getAllPokemons = async (req, res) => {
    try {
        const query = "SELECT * FROM `Pokemons`";
        connection.query(query, (err, results) => {
          if (err) {
            console.error("Error al encontrar el POKEMON: " + err);
            res.status(500).send("Error al encontrar los POKEMONS");
          } else {
            res.send(results);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    export const createPokemons = async (req, res) => {
        try {
          const { NAME, HEIGHT, WEIGHT, TYPE, ABILITIES } = req.body;
      
          // Verifica que el TYPE existe en la tabla TYPES
          const typeQuery = "SELECT `Id` FROM `Types` WHERE `Id` = ?";
          connection.query(typeQuery, [TYPE], (err, results) => {
            if (err) {
              console.error("Error al verificar el TYPE: ", err);
              res.status(500).send("Error en la verificación del TYPE");
            } else if (results.length === 0) {
              res.status(400).send("El TYPE especificado no existe");
            } else {
              // Si el TYPE existe, procede a insertar el Pokémon
              const query = "INSERT INTO `Pokemons`(`NAME`, `HEIGHT`, `WEIGHT`, `TYPE`, `ABILITIES`) VALUES (?,?,?,?,?)";
              connection.query(query, [NAME, HEIGHT, WEIGHT, TYPE, ABILITIES], (err, results) => {
                if (err) {
                  console.error("Error al ingresar el POKEMON: ", err);
                  res.status(500).send("Error en la tabla POKEMON");
                } else {
                  res.send("Pokémon creado exitosamente");
                  console.log("El Pokémon se ha registrado exitosamente.");
                }
              });
            }
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({
            mensaje: "Error en la petición a la base de datos",
          });
        }
      };

      export const updatePokemons = async (req, res) => {
        try {
          const { id, NAME, HEIGHT, WEIGHT, TYPE, ABILITIES } = req.body;
          const query =
            "UPDATE `Pokemons` SET `NAME` = ?, `HEIGHT` = ?, `WEIGHT` = ?, `TYPE` = ?, `ABILITIES` = ? WHERE `id` = ?";
      
          connection.query(
            query,
            [NAME, HEIGHT, WEIGHT, TYPE, ABILITIES, id],
            (err) => {
              if (err) {
                console.error("Error al actualizar el POKEMON: ", err);
                res.status(500).send("Error en la tabla POKEMON");
              } else {
                res.send("Pokemon actualizado exitosamente");
                console.log("El pokemon se ha actualizado exitosamente.");
              }
            }
          );
        } catch (error) {
          console.error("Error en la petición a la base de datos:", error);
          res.status(500).json({
            mensaje: "Error en la petición a la base de datos",
          });
        }
      };

      export const deletePokemons = async (req, res) => {
        try {
          const { NAME } = req.body; // Asumiendo que el nombre del Pokémon a eliminar se pasa en el cuerpo de la solicitud
          const query = "DELETE FROM `Pokemons` WHERE `NAME` = ?";
      
          connection.query(query, [NAME], (err) => {
            if (err) {
              console.error("Error al eliminar el POKEMON: ", err);
              res.status(500).send("Error en la tabla POKEMON");
            } else {
              res.send("Pokémon eliminado exitosamente");
              console.log("El Pokémon se ha eliminado exitosamente.");
            }
          });
        } catch (error) {
          console.error("Error en la petición a la base de datos:", error);
          res.status(500).json({
            mensaje: "Error en la petición a la base de datos",
          });
        }
      };
      
      
      
      
