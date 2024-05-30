# Correcciones API REST Grupo 1 (Correspondientes a la rama "Juan-Jose" la cual al momento de clonar el repositorio era la rama que iba mas avanzada)
Todas las indicaciones dadas aquí nos serán las únicas que deberán corregir:

## Rutas
Solo se usa una ruta en la api la cual es la ruta de users, las demas rutas nunca se usan.

```` javascript
    app.use("/users", userRoutes); // Usa las rutas de usuarios
````

Por lo cual no se revisarón las rutas que no se usan.

## Esquemas y Modelos

El proyecto actualmente no cuenta con esquemas ni con modelos. Los esquemas son necesarios para validar los datos de entrada y garantizar que cumplen con las especificaciones requeridas. Por otro lado, los modelos son fundamentales para definir la estructura de los datos en nuestra base de datos.

## Registro
En el contrato se pedia que `Por defecto, todos los usuarios que se registren serán de tipo User`, pero se me pide que ingrese mi tipo de rol para registrarme, esto no es correcto.

```` javascript
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
````
Sólo se debería pedir `Email`, `Password` y segun el requisito `Debe haber contraseña y confirmar contraseña, para evitar errores en la contraseña por parte del usuario.
` se debe pedir tambien `ConfirmPassword`.


## Middleware

### Autentificación
```` javascript
export const isAuthenticated = (req, res, next) => {
    // Verificar si el usuario esta autenticado (por ejemplo, si existe un token en las cookies)
    if (req.cookies.token) {
      return next(); // Si el usuario esta autenticado, pasa al siguiente middleware
    } else {
      return res.status(401).json({ message: "No autorizado" }); // Si no esta autenticado, devuelve un error de no autorizado
    }
  };
  
````

- Si bien el middleware cumple su funcionalidad, es una mala practica solo er si hay un token el las cookies.

Si el token es inválido o si el usuario no existe, se devuelve un error de no autentificado. Si el token es válido y el usuario existe el usuario estaría correctamente autentificado.

### Autorización

```` javascript
  export const isAdmin = (req, res, next) => {
    // Verificar si el usuario es administrador
    if (req.user && req.user.role === "Gym Leader") {
      return next(); // Si el usuario es administrador, pasa al siguiente middleware
    } else {
      return res.status(403).json({ message: "Acceso prohibido" }); // Si no es administrador, devuelve un error de acceso prohibido
    }
  };
````
El uso de este middleware es correcto, pero teniendo en cuenta que un requisito es que los tipo de usuario son `(Admin o User)` el tipo de usuario `Gym Leader` es incorrecto.


## Conexíon con la base de datos
Si bien la conexión es correcta y bien implementada:

```` javascript 
import mysql from "mysql";

const connection = mysql.createConnection({
    host: "btgwscae1gfaouvhxykt-mysql.services.clever-cloud.com",
    user: "umvdbag5uqsb4npg",
    password: "1EZ0l48ZJCWTbLzvZbru",
    database: "btgwscae1gfaouvhxykt",
})

connection.connect((err)=>{
    if(err){
        console.error("No se pudo conectar con la base de datos," + err);
        return;
    }
    console.log("conexión exitosa.")
})

export default connection;

````

Se sugiere que usen variables de entorno para proteger la información sensible como el host, el usuario, la contraseña y el nombre de la base de datos. Las variables de entorno son una excelente manera de proteger la información sensible y de configurar diferentes entornos (por ejemplo, desarrollo, pruebas, producción).




