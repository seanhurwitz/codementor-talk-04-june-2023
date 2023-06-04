import getTeam from "../getTeam";

const deleteTeam = async (id: number): Promise<boolean> => {
  const team = await getTeam(id);
  if (!team) throw new Error("Team does not exist");
  await team.destroy();
  return true;
};

export default deleteTeam;
