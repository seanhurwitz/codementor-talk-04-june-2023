import {
  PlayerAttributes,
  PlayerCreationAttributes,
  PlayerTeamAttributes,
  PlayerTeamCreationAttributes,
  TeamAttributes,
  TeamCreationAttributes,
} from "common/interfaces";
import { ModelDefined } from "sequelize";

enum eModelNames {
  player = "player",
  team = "team",
  playerTeam = "playerTeam",
}

interface Models {
  [eModelNames.player]: ModelDefined<
    PlayerAttributes,
    PlayerCreationAttributes
  >;
  [eModelNames.team]: ModelDefined<TeamAttributes, TeamCreationAttributes>;
  [eModelNames.playerTeam]: ModelDefined<
    PlayerTeamAttributes,
    PlayerTeamCreationAttributes
  >;
}

export { eModelNames, Models };
