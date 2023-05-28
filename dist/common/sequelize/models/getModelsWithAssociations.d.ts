import { Sequelize } from "sequelize";
import { Models } from "./config";
declare enum eAssociationKeys {
    teams = "teams",
    players = "players"
}
declare const getModelsWithAssociations: (sequelize: Sequelize) => Models;
export { getModelsWithAssociations, eAssociationKeys };
//# sourceMappingURL=getModelsWithAssociations.d.ts.map