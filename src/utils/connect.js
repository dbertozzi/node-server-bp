import { createConnection, Connection } from "typeorm";

export const connect = () => {
  createConnection({
    type: "postgres",
    url: process.env.CONNECTION_URL,
  })
    .then((connection) => {
      return connection;
    })
    .catch((error) => {
      console.log(error);
    });
};
