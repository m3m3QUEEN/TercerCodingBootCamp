// authMiddleware.js

// Middleware para verificar si el usuario esta autenticado
export const isAuthenticated = (req, res, next) => {
    // Verificar si el usuario esta autenticado (por ejemplo, si existe un token en las cookies)
    if (req.cookies.token) {
      return next(); // Si el usuario esta autenticado, pasa al siguiente middleware
    } else {
      return res.status(401).json({ message: "No autorizado" }); // Si no esta autenticado, devuelve un error de no autorizado
    }
  };
  
  // Middleware para verificar si el usuario es administrador
  export const isAdmin = (req, res, next) => {
    // Verificar si el usuario es administrador
    if (req.user && req.user.role === "Gym Leader") {
      return next(); // Si el usuario es administrador, pasa al siguiente middleware
    } else {
      return res.status(403).json({ message: "Acceso prohibido" }); // Si no es administrador, devuelve un error de acceso prohibido
    }
  };
  