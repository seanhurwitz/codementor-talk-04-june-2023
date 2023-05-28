declare const database: any;
declare const getMysqlConnection: (newConnection?: boolean, withDatabase?: boolean) => {
    dbConnection: any;
    models: import("./models/config").Models;
};
export { getMysqlConnection, database };
//# sourceMappingURL=getConnection.d.ts.map