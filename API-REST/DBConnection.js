import mysql from "mysql";

const connection = mysql.createPool({
    connectionLimit: 10, // Establece un límite máximo de conexiones simultáneas para evitar problemas de escalabilidad
    host: "btgwscae1gfaouvhxykt-mysql.services.clever-cloud.com",
    user: "umvdbag5uqsb4npg",
    password: "1EZ0l48ZJCWTbLzvZbru",
    database: "btgwscae1gfaouvhxykt",
});

connection.on('error', (err) => {
    console.error("Error de conexión a la base de datos:", err);
});

export default connection;
