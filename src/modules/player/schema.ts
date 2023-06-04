import { PlayerAttributes, PlayerCreationAttributes } from "common";
import Joi from "joi";

const playerCreateSchema = Joi.object<PlayerCreationAttributes>({
  name: Joi.string().required(),
  age: Joi.number().required(),
  height: Joi.number().required(),
  skill: Joi.number().required(),
});

const playerUpdateSchema = Joi.object<PlayerAttributes>({
  id: Joi.string().required(),
  name: Joi.string().optional(),
  age: Joi.number().optional(),
  height: Joi.number().optional(),
  skill: Joi.number().optional(),
});

export { playerCreateSchema, playerUpdateSchema };
