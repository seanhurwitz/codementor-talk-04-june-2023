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

export { eTeamRegion, TeamCreationAttributes, TeamAttributes };
