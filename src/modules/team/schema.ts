import { TeamAttributes, TeamCreationAttributes, eTeamRegion } from "common";
import Joi from "joi";

const region = Joi.string().valid(...Object.values(eTeamRegion));

const teamCreateSchema = Joi.object<TeamCreationAttributes>({
  name: Joi.string().required(),
  region: region.required(),
});

const teamUpdateSchema = Joi.object<TeamAttributes>({
  id: Joi.string().required(),
  region,
});

export { teamCreateSchema, teamUpdateSchema };
