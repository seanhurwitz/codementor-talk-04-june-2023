import getPlayer from "../getPlayer";

const deletePlayer = async (id: number): Promise<boolean> => {
  const player = await getPlayer(id);
  if (!player) throw new Error("Player does not exist");
  await player.destroy();
  return true;
};

export default deletePlayer;
