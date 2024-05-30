// endpoints/users.js

import express from "express";
import connection from "../../DBConnection.js"; // Asegúrate de ajustar la ruta de acuerdo a la ubicación de tu archivo de conexión

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
      // Comparar la contraseña proporcionada con el hash almacenado en la base de datos
      const match = await bcrypt.compare(plainPassword, hashedPassword);
      return match;
  } catch (error) {
      console.error('Error al comparar contraseñas:', error);
      throw error;
  }
};

export { comparePasswords };

// Funcion para iniciar sesion
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const query = "SELECT * FROM `Users` WHERE `email` = ? LIMIT 1";
    connection.query(query, [email], async (err, results) => {
      if (err) {
        console.error("Error al buscar usuario: " + err);
        return res.status(500).json({ message: "Error en el servidor" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Credenciales invalidas" });
      }

      const user = results[0];

      // Verifica si el hash de la contraseña esta presente en los resultados
      console.log("Hash de la contraseña obtenido de la base de datos:", user.password);

      // Verifica que el hash de la contraseña se este pasando correctamente a la funcion compare
      console.log("Hash de la contraseña proporcionado:", password);

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Credenciales invalidas" });
      }

      const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET);

      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ message: "Inicio de sesion exitoso", token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// Funcion para cerrar sesion
export const logoutUser = async (req, res) => {
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