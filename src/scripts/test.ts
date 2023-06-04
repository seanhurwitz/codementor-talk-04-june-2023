import { PlayerModel, TeamModel, eTeamRegion } from "common";
import { playerLib, teamLib } from "modules";
import bootstrap from "./bootstrap";

let player: PlayerModel | undefined;
let team1: TeamModel | undefined;
let team2: TeamModel | undefined;

const testCreateTeams = async () => {
  team1 = await teamLib.createTeam({
    name: "Team WON",
    region: eTeamRegion.NORTH,
  });
  team2 = await teamLib.createTeam({
    name: "Team TOO",
    region: eTeamRegion.SOUTH,
  });
  const test = [team1, team2].every(Boolean);
  console.log("Create Teams", test);
};

const testCreatePlayer = async () => {
  player = await playerLib.createPlayer({
    name: "Sean",
    age: 31,
    skill: 100,
    height: 175,
  });
  const test = !!player;
  console.log("Create Player", test);
};

const runTests = async () => {
  await bootstrap();
  await testCreateTeams();
  await testCreatePlayer();
};

runTests();
