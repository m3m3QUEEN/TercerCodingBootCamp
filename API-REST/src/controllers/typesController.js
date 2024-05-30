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

export const updateType = async (req, res) => {
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


export const deleteType = (req, res) => {
  const { id } = req.params; // Obtener el parámetro id de la solicitud

  // Asegurarse de que la conexión y la consulta se manejen adecuadamente
  connection.query('DELETE FROM Types WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).send('No se pudo eliminar el Type');
    }

    res.send('Se elimino el Type');
  });
};

