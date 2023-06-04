import {
  PlayerCreationAttributes,
  PlayerModel,
  PlayerTeamCreationAttributes,
  getMysqlConnection,
  validateSchema,
} from "common";
import { playerCreateSchema } from "../schema";

const createPlayer = async (
  input: PlayerCreationAttributes
): Promise<PlayerModel> => {
  const validatedInput = validateSchema(input, playerCreateSchema);
  const { models, dbConnection } = getMysqlConnection();
  return dbConnection.transaction(async (transaction) => {
    const player = await models.player.create(validatedInput, { transaction });
    if ((validatedInput.teamIds?.length || 0) > 0) {
      const teamInput: PlayerTeamCreationAttributes[] =
        validatedInput.teamIds!.map((team) => ({
          ...team,
          playerId: player.getDataValue("id"),
        }));
      await models.playerTeam.bulkCreate(teamInput, { transaction });
    }
    return player;
  });
};

export default createPlayer;
