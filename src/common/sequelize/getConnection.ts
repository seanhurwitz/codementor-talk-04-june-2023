import { Options, Sequelize } from "sequelize";
import { getModelsWithAssociations } from "./models";

let existingConnection: Sequelize;

const database = process.env.DB_NAME || "fantasy-team-ball";

const getMysqlDbConfig = (withDatabase = true): Options => {
  return {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "opensesame",
    host: process.env.DB_HOST || "localhost",
    port: +(process.env.DB_PORT || 3306),
    ...(withDatabase ? { database } : {}),
    dialect: "mysql",
    logging: false,
    define: { freezeTableName: true, underscored: true },
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
  };
};

const getMysqlConnection = (newConnection = false, withDatabase = true) => {
  const newConnectionObject = new Sequelize(getMysqlDbConfig(withDatabase));
  const dbConnection = newConnection
    ? newConnectionObject
    : existingConnection || newConnectionObject;
  existingConnection = dbConnection;
  const models = getModelsWithAssociations(dbConnection);
  return { dbConnection, models };
};

export { getMysqlConnection, database };
