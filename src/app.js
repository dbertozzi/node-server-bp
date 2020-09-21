import express from "express";
import dotenv from "dotenv"
import { logger } from "./utils/logger"
import requestLogger from "morgan"
import morgan from "morgan";

dotenv.config();

const app = express();
const port = 3000;


app.use(morgan("tiny"))
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => logger.info(`App listening on port ${port}!`));
