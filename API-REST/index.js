import express from "express";
import cors from "cors";
import connection from "./DB/DBConnection.js";

const app = express();

app.use(express.json());
app.use(cors());

// Para propósitos de prueba, permitimos todos los orígenes
const allowedOrigins = ['*'];

const corsOption = {
    origin: function(origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed origin by CORS."));
        }
    }
};

app.use(cors(corsOption));

app.get("/", (req, res) => {
    res.send("API Funcionando");
});

app.get("/users", (req, res) => {
    const query = "SELECT * FROM `Usuarios`";
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Error al encontrar los usuarios: " + err);
            res.status(500).send("Error al encontrar los usuarios");
        } else {
            res.send(results);
        }
    });
});

app.post("/register", (req, res) => {
    const { nombre, correo, contraseña, rol } = req.body;
    const query = "INSERT INTO `Usuarios`(`nombre`, `correo`, `contraseña`, `rol`) VALUES (?,?,?,?)";

    connection.query(query, [nombre, correo, contraseña, rol], (err, results) => {
        if (err) {
            console.error("Error al crear usuario: ", err);
            res.status(500).send("Error al crear usuario");
        } else {
            res.send("Usuario creado");
            console.log("Usuario registrado exitosamente.");
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("running at port: " + PORT);
});