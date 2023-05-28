import { eTeamRegion } from "common/interfaces";
import { DataTypes, Sequelize } from "sequelize";
import { Models, eModelNames } from "./config";
import { sequelizeIntegerRequired, sequelizeStringRequired } from "./utils";

const getTeamModel = (sequelize: Sequelize) => {
  const Team: Models[eModelNames.team] = sequelize.define(eModelNames.team, {
    id: sequelizeIntegerRequired(true, true),
    name: sequelizeStringRequired(),
    region: DataTypes.ENUM(...Object.values(eTeamRegion)),
  });
  return Team;
};

export default getTeamModel;
