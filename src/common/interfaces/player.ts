import { Model } from "sequelize";
import { PaginationData, SearchInput } from "./common";
import { TeamAttributes } from "./team";

interface PlayerCreationAttributes {
  name: string;
  age: number;
  height: number;
  skill: number;
  teamIds?: { teamId: number; value: number }[];
}

interface PlayerAttributes extends PlayerCreationAttributes {
  id: number;
  teams?: TeamAttributes[];
}

interface PlayerQueryInput {
  name?: string;
}

type PlayerSearchInput = SearchInput<PlayerQueryInput>;
type PlayerPaginationData = PaginationData<PlayerModel>;

type PlayerModel = Model<PlayerAttributes, PlayerCreationAttributes>;

export {
  PlayerCreationAttributes,
  PlayerAttributes,
  PlayerModel,
  PlayerPaginationData,
  PlayerQueryInput,
  PlayerSearchInput,
};
