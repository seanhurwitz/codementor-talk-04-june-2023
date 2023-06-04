import { TeamAttributes, TeamModel, validateSchema } from "common";
import getTeam from "../getTeam";
import { teamUpdateSchema } from "../schema";

const updateTeam = async (input: TeamAttributes): Promise<TeamModel> => {
  const validatedInput = validateSchema(input, teamUpdateSchema);
  const team = await getTeam(input.id);
  if (!team) throw new Error("Team does not exist");
  return team.update(validatedInput);
};

export default updateTeam;
