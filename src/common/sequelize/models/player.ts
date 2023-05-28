import { Sequelize } from "sequelize";
import { Models, eModelNames } from "./config";
import { sequelizeIntegerRequired, sequelizeStringRequired } from "./utils";

const getPlayerModel = (sequelize: Sequelize) => {
  const Player: Models[eModelNames.player] = sequelize.define(
    eModelNames.player,
    {
      id: sequelizeIntegerRequired(true, true),
      name: sequelizeStringRequired(),
      age: sequelizeIntegerRequired(),
      height: sequelizeIntegerRequired(),
      skill: sequelizeIntegerRequired(),
    }
  );
  return Player;
};

export default getPlayerModel;
