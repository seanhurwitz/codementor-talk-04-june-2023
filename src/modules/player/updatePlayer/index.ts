import { PlayerAttributes, PlayerModel, validateSchema } from "common";
import getPlayer from "../getPlayer";
import { playerUpdateSchema } from "../schema";

const updatePlayer = async (input: PlayerAttributes): Promise<PlayerModel> => {
  const validatedInput = validateSchema(input, playerUpdateSchema);
  const player = await getPlayer(input.id);
  if (!player) throw new Error("Player does not exist");
  return player.update(validatedInput);
};

export default updatePlayer;
