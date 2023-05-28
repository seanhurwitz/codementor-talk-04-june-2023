import { Model } from "sequelize";

interface PlayerTeamCreationAttributes {
  playerId: number;
  teamId: number;
  value: number;
}

interface PlayerTeamAttributes extends PlayerTeamCreationAttributes {}

type PlayerTeamModel = Model<
  PlayerTeamAttributes,
  PlayerTeamCreationAttributes
>;

export { PlayerTeamCreationAttributes, PlayerTeamAttributes, PlayerTeamModel };
