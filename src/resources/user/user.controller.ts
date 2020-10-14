import { User } from "./user.entity";
import { getConnection, getManager } from "typeorm";
import { logger } from "../../utils/logger";
type UserParams = { [key: string]: string };
export const getOneUser = async (params: UserParams) => {
  try {
    const user = getManager().findOne(User, params);
    return user;
  } catch (error) {
    logger.error("Error in getUser.");
    throw error;
  }
};

export const getManyUser = async (params: UserParams = {}) => {
  try {
    const user = getManager().find(User, params);
    return user;
  } catch (error) {
    logger.error("Error in getUser.");
    throw error;
  }
};

export const saveUser = async (params: UserParams) => {
  try {
    const user = await getConnection().getRepository(User).insert(params);
    return user;
  } catch (error) {
    logger.error("Error in saveUser.");
    throw error;
  }
};

export const deleteUser = async (params: UserParams = {}) => {
  try {
    const users = await getManager().find(User, params);
    if (users.length === 0) {
      throw new Error("Query did not find any User to delete.");
    }
    if (users.length !== 0 && users.length !== 1) {
      throw new Error("Expected to find one user to delete, found multiple.");
    }
    await getManager().delete(User, users[0]);
  } catch (error) {
    logger.error("Error in getUser.");
    throw error;
  }
};

export const deleteAllUser = async () => {
  try {
    const users = await getManager().find(User);
    users.forEach(async (user) => {
      await getManager().delete(User, user);
    });
  } catch (error) {
    logger.error("Error in getUser.");
    throw error;
  }
};
