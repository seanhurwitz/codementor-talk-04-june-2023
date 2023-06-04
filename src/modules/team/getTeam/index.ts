import { TeamModel, getMysqlConnection } from "common";

const getTeam = async (id: number): Promise<TeamModel | null> => {
  const { models } = getMysqlConnection();
  return models.team.findByPk(id);
};

export default getTeam;
