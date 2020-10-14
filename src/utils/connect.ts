import { createConnection, Connection } from "typeorm";
import { logger } from "./logger";
import { User } from "../resources/user/user.entity";
export const connect = () => {
  createConnection({
    type: "postgres",
    url: process.env.CONNECTION_URL,
    entities: [User],
    synchronize: process.env.NODE_ENV === "development",
  })
    .then((connection) => {
      logger.info("DB connection successful.");
      return connection;
    })
    .catch((error) => {
      logger.info(error);
    });
};
