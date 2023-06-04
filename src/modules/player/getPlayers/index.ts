import {
  PlayerPaginationData,
  PlayerSearchInput,
  getMysqlConnection,
} from "common";
import { mysqlSearchRows } from "common/utils/sequelize/searchRows";

const getPlayers = async ({
  where,
  pagination,
}: PlayerSearchInput): Promise<PlayerPaginationData> => {
  const { models } = getMysqlConnection();
  return mysqlSearchRows({ model: models.player, where, pagination });
};

export default getPlayers;
