import { PlayerModel, getMysqlConnection } from "common";

const getPlayer = async (id: number): Promise<PlayerModel | null> => {
  const { models } = getMysqlConnection();
  return models.player.findByPk(id);
};

export default getPlayer;
