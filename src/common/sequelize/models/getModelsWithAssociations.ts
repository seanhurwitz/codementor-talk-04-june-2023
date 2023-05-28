import { Sequelize } from "sequelize";
import { Models, eModelNames } from "./config";
import getPlayerModel from "./player";
import getPlayerTeamModel from "./playerTeam";
import getTeamModel from "./team";

enum eAssociationKeys {
  teams = "teams",
  players = "players",
}

const getModelsWithAssociations = (sequelize: Sequelize): Models => {
  const Player = getPlayerModel(sequelize);
  const Team = getTeamModel(sequelize);
  const PlayerTeam = getPlayerTeamModel(sequelize);

  Player.belongsToMany(Team, {
    as: eAssociationKeys.teams,
    through: PlayerTeam,
  });

  Team.belongsToMany(Player, {
    as: eAssociationKeys.players,
    through: PlayerTeam,
  });

  return {
    [eModelNames.player]: Player,
    [eModelNames.team]: Team,
    [eModelNames.playerTeam]: PlayerTeam,
  };
};

export { getModelsWithAssociations, eAssociationKeys };
