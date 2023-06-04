import {
  TeamPaginationData,
  TeamSearchInput,
  getMysqlConnection,
} from "common";
import { mysqlSearchRows } from "common/utils/sequelize/searchRows";

const getTeams = async ({
  where,
  pagination,
}: TeamSearchInput): Promise<TeamPaginationData> => {
  const { models } = getMysqlConnection();
  return mysqlSearchRows({ model: models.team, where, pagination });
};

export default getTeams;
