import {
  TeamCreationAttributes,
  TeamModel,
  getMysqlConnection,
  validateSchema,
} from "common";
import { teamCreateSchema } from "../schema";

const createTeam = async (
  input: TeamCreationAttributes
): Promise<TeamModel> => {
  const validatedInput = validateSchema(input, teamCreateSchema);
  const { models } = getMysqlConnection();
  return models.team.create(validatedInput);
};

export default createTeam;
