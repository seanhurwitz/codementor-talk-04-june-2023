import { getMysqlConnection } from "common";

const alter = async () => {
  const { dbConnection } = getMysqlConnection();
  await dbConnection.sync({ force: true });
  console.log("Altered Database With all Tables and Associations!");
};

alter();
