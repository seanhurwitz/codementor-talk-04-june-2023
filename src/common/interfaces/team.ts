import { Model } from "sequelize";
import { PaginationData, SearchInput } from "./common";

enum eTeamRegion {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}

interface TeamCreationAttributes {
  name: string;
  region: eTeamRegion;
}

interface TeamAttributes extends TeamCreationAttributes {
  id: number;
}

interface TeamQueryInput {
  name?: string;
  region?: string;
}

type TeamSearchInput = SearchInput<TeamQueryInput>;
type TeamPaginationData = PaginationData<TeamModel>;

type TeamModel = Model<TeamAttributes, TeamCreationAttributes>;

export {
  eTeamRegion,
  TeamCreationAttributes,
  TeamAttributes,
  TeamModel,
  TeamQueryInput,
  TeamSearchInput,
  TeamPaginationData,
};
