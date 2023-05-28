import { Sequelize } from "sequelize";
declare const database: string;
declare const getMysqlConnection: (newConnection?: boolean, withDatabase?: boolean) => {
    dbConnection: Sequelize;
    models: import("./models/config").Models;
};
export { getMysqlConnection, database };
//# sourceMappingURL=getConnection.d.ts.map