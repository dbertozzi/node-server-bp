import express from "express";
import dotenv from "dotenv";
import process from "process";
import requestLogger from "morgan";
import "reflect-metadata";
import bodyParser from "body-parser";

import { logger } from "./utils/logger";
import { connect as dbConnect } from "./utils/connect";
import userRouter from "./routes/user.router";
import config from "./config/config";

dotenv.config();
dbConnect();
const app = express();

app.use(bodyParser.json());
app.use(requestLogger("tiny"));
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/user", userRouter);

const server = app.listen(config.port, config.host, () =>
  logger.info(`App listening at http://${config.host}:${config.port}`)
);

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
