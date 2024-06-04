import jwt from "jsonwebtoken";
import Joi from "joi";

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
  const token = req.cookies && req.cookies.token; // Verificar si req.cookies está definido

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

export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirmPassword: Joi.ref('password'),
  role: Joi.string().valid('admin', 'user').required()
}).with('password', 'confirmPassword');

export const pokemonAbilitySchema = Joi.object({
  NAME: Joi.string().required(),
  height: Joi.number().positive().required(),
  weight: Joi.number().positive().required(),
  TYPE: Joi.string().required(),
  abilities: Joi.array().items(Joi.string()).required()
});

export const pokemonTypeSchema = Joi.object({
  name: Joi.string().required(),
  element: Joi.string().required(),
  strength: Joi.string().required(),
  weakness: Joi.string().required()
});

export const abilitySchema = Joi.object({
  NAME: Joi.string().required(),
  POWER: Joi.number().positive().required(),
  accuracy: Joi.number().positive().required(),
  effect: Joi.string().required()
});
