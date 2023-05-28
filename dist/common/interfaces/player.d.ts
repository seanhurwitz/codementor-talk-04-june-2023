import { Model } from "sequelize";
interface PlayerCreationAttributes {
    name: string;
    age: number;
    height: number;
    skill: number;
}
interface PlayerAttributes extends PlayerCreationAttributes {
    id: number;
}
type PlayerModel = Model<PlayerAttributes, PlayerCreationAttributes>;
export { PlayerCreationAttributes, PlayerAttributes, PlayerModel };
//# sourceMappingURL=player.d.ts.map