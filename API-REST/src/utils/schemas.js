// schemas.js

import Joi from "joi";

export const abilitySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});


export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('admin', 'user').required()
});

export const pokemonTypeSchema = Joi.object({
  name: Joi.string().required(),
  element: Joi.string().required(),
  strength: Joi.string().required(),
  weakness: Joi.string().required()
});


export const pokemonAbilitySchema = Joi.object({
  name: Joi.string().required(),
  power: Joi.number().integer().min(0).required(),
  accuracy: Joi.number().integer().min(0).max(100).required(),
  effect: Joi.string().required()
});
