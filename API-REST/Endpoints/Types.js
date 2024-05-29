const router = express.Router();

router.get("/users", (req, res) => {
    const query = "SELECT * FROM `TYPES`";
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
    const query = "INSERT INTO `USUARIOS`(`EMAIL`, `PASSWORD`, `ROLE`) VALUES (?,?,?)";

    connection.query(query, [EMAIL, PASSWORD, ROLE], (err, results) => {
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
