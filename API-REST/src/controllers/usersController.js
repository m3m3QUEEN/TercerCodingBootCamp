// src/controllers/usersController.js

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connection from "../../DBConnection.js";

// Funcion para crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Consulta para insertar un nuevo usuario en la base de datos
    const query = "INSERT INTO `Users` (email, password, role) VALUES (?, ?, ?)";
    connection.query(query, [email, hashedPassword, role], (err, results) => {
      if (err) {
        console.error("Error al crear el usuario: " + err);
        return res.status(500).send("Error al crear el usuario");
      }
      res.status(201).json({ message: "Usuario creado exitosamente" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// Funcion para obtener todos los usuarios
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
    res.clearCookie("token");
    res.status(200).json({ message: "Cierre de sesion exitoso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
