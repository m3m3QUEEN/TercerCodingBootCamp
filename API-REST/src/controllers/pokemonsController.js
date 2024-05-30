import express from "express";
import connection from "../../DBConnection.js";

export const getAllPokemons = async (req, res) => {
  try {
    const query = "SELECT * FROM `Pokemons`";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error al encontrar el Pokemon: " + err);
        res.status(500).send("Error al encontrar los Pokemons");
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
    const { NAME, height, weight, TYPE, abilities } = req.body;
    const query =
      "INSERT INTO `Pokemons`(`NAME`, `height`, `weigth`, `TYPE`, `abilities`) VALUES (?,?,?,?,?)"; // Error: 'weigth' debería ser 'weight'

    connection.query(
      query,
      [NAME, height, weight, TYPE, abilities],
      (err, results) => {
        if (err) {
          console.error("Error al Ingresar el Pokemon: ", err);
          res.status(500).send("Error en la tabla Pokemons");
        } else {
          res.send("Pokemon creado");
          console.log("El Pokemon se ha registrado exitosamente.");
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al procesar la solicitud"); // Falta esta línea en el código original
  }
};

export const updatePokemons = async (req, res) => {
  const { id } = req.params;
  const { name, element, strength, weakness } = req.body;

  if (!id || !name || !element || !strength || !weakness) {
    return res.status(400).send({ error: 'No se pudo actualizar los datos' });
  }

  connection.query(
    'UPDATE Types SET name = ?, element = ?, strength = ?, weakness = ? WHERE id = ?',
    [name, element, strength, weakness, id],
    (error, results) => {
      if (error) {
        return res.status(500).send({ error: 'Actualizaion fallida' });
      }
      return res.status(200).send({ message: 'Informacion actualizadad con exito' });
    }
  );
};
// res.send('Se actualizo correctamente');


export const deletePokemons = (req, res) => {
  const { id } = req.params; // Obtener el parámetro id de la solicitud

  // Asegurarse de que la conexión y la consulta se manejen adecuadamente
  connection.query('DELETE FROM Types WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).send('No se pudo eliminar el Type');
    }

    res.send('Se elimino el Type');
  });
};

