import { Sequelize } from "sequelize";
import { Models, eModelNames } from "./config";
import { sequelizeIntegerRequired } from "./utils";

const getPlayerTeamModel = (sequelize: Sequelize) => {
  const PlayerTeam: Models[eModelNames.playerTeam] = sequelize.define(
    eModelNames.playerTeam,
    {
      playerId: sequelizeIntegerRequired(true),
      teamId: sequelizeIntegerRequired(true),
      value: sequelizeIntegerRequired(),
    }
  );
  return PlayerTeam;
};

export default getPlayerTeamModel;
