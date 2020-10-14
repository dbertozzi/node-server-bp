import { Router } from "express";
import { User } from "../resources/user/user.entity";
import {
  getManyUser,
  saveUser,
  deleteUser,
} from "../resources/user/user.controller";
import { logger } from "../utils/logger";
import { validateOrReject } from "class-validator";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const user = await getManyUser(req.body);
    if (user === undefined) {
      return res.status(404).send("User not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    logger.error(JSON.stringify(error));
    res.status(400).end();
  }
});

router.post("/", async (req, res) => {
  logger.info(JSON.stringify(req.body));
  try {
    const user = new User();
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    await validateOrReject(user);
  } catch (error) {
    return res.status(422).send("Validation failed.");
  }
  try {
    const user = await saveUser(req.body);
    if (user === undefined) {
      return res.status(404).send("User unable to be created");
    }
    return res.status(201).end();
  } catch (error) {
    logger.error(`/user POST: ${JSON.stringify(error)}`);
    res.status(400).end();
  }
});

router.delete("/", async (req, res) => {
  try {
    const user = await deleteUser(req.body);
    return res.status(200).send("User successfully deleted.");
  } catch (error) {
    logger.error(`/user DELETE: ${JSON.stringify(error)}`);
    res.status(400).end();
  }
});

export default router;
