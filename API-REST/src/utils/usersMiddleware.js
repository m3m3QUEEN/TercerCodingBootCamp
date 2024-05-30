import jwt from "jsonwebtoken";

export const adminRolValidation = async (req, res, next) => {
  const { token } = req.cookies;
  const payload = jwt.decode(token);

  if (payload.role.toLowerCase() !== "admin") {
    res
      .status(400)
      .json({ error: "El usuario no tiene permisos para esta acción" });
  } else {
    next();
  }
};

export const authenticateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Por favor inicia sesión" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid Token" });
    }
    req.user = user;
    next();
  });
};
