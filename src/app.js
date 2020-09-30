import express from "express";
import dotenv from "dotenv"
import { logger } from "./utils/logger"
import process from "process"
import requestLogger from "morgan"

dotenv.config();

const app = express();
const port = 3000;
const host = "0.0.0.0"

app.use(requestLogger("tiny"))
app.get("/", (req, res) => res.send("Hello World!"));

const server = app.listen(port, host, () => logger.info(`App listening at http://${host}:${port}`));

process.on("SIGTERM", () => {
    server.close(() => {
        console.log('Process terminated')
    })
})
