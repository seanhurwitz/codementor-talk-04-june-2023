import { database, getMysqlConnection } from "common";

const bootstrap = async () => {
  const { dbConnection: withNoDb } = getMysqlConnection(true, false);
  await withNoDb.query(`DROP DATABASE IF EXISTS \`${database}\``);
  await withNoDb.query(`CREATE DATABASE \`${database}\``);
  const { dbConnection } = getMysqlConnection(true, true);
  await dbConnection.sync({ force: true });
  console.log("Created Database With all Tables and Associations!");
};

export default bootstrap;
