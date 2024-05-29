// endpoints/users.js

import express from 'express';
import connection from '../DB/DBConnection.js'; // Asegúrate de ajustar la ruta de acuerdo a la ubicación de tu archivo de conexión

const router = express.Router();

router.get("/users", (req, res) => {
    const query = "SELECT * FROM `USUARIOS`";
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Error al encontrar los usuarios: " + err);
            res.status(500).send("Error al encontrar los usuarios");
        } else {
            res.send(results);
        }
    });
});

router.post("/register", (req, res) => {
    const { EMAIL, PASSWORD, ROLE} = req.body;
    const query = "INSERT INTO `USUARIOS`(`EMAIL`, `PASSSWORD`, `ROLE`) VALUES (?,?,?)";

    connection.query(query, [EMAIL, PASSSWORD, ROLE], (err, results) => {
        if (err) {
            console.error("Error al crear usuario: ", err);
            res.status(500).send("Error al crear usuario");
        } else {
            res.send("Usuario creado");
            console.log("Usuario registrado exitosamente.");
        }
    });
});

export default router;
