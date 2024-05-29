const router = express.Router();

router.get("/users", (req, res) => {
    const query = "SELECT * FROM `TYPES`";
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Error al encontrar el TYPE: " + err);
            res.status(500).send("Error al encontrar los TYPES");
        } else {
            res.send(results);
        }
    });
});

router.post("/register", (req, res) => {
    const { NAME, ELEMENT, STREGHT, WEAKNESS} = req.body;
    const query = "INSERT INTO `USUARIOS`(`NAME`, `ELEMENT`, `STREGHT`,`WEAKNESS`) ALUES (?,?,?,?)";

    connection.query(query, [NAME, ELEMENT, STREGHT, WEAKNESS], (err, results) => {
        if (err) {
            console.error("Error al Ingresar el TYPE: ", err);
            res.status(500).send("Error en la tabla TYPE");
        } else {
            res.send("Type creado");
            console.log("El TYPE se ha registrado exitosamente.");
        }
    });
});

export default router;
