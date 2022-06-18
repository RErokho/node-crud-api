import { IncomingMessage, ServerResponse } from "http";

import UserModel from "../../models/UserModel";

import Database from "../../components/Database";
import ResponseCreator from "../../components/ResponseCreator";
import { TableName, TUserData } from "../../components/Database/types";

import { getReqData } from "./utils";

const db = Database.getDB();
const rc = ResponseCreator.getRC();

class UsersController {
  private static controllerInstance: UsersController | null = null;

  private constructor() {}

  public static getController(): UsersController {
    if (this.controllerInstance === null) {
      this.controllerInstance = new UsersController();
    }

    return this.controllerInstance;
  }
  public async getAllUsers(
    _req: IncomingMessage,
    res: ServerResponse,
    _data: string | null
  ): Promise<void> {
    try {
      const users = (await db.get(TableName.USERS)) as Array<TUserData>;

      rc.status200(res, users);
    } catch (e) {
      rc.status500(res);
    }
  }

  public async getUser(
    _req: IncomingMessage,
    res: ServerResponse,
    urlData: string | null
  ): Promise<void> {
    const id: number = Number(urlData);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      rc.status400(res, "Incorrect UserId");

      return;
    }

    try {
      const user = (await db.get(TableName.USERS, id)) as TUserData | null;

      if (user === null) {
        rc.status404(res, "User Is Not Found");
      } else {
        rc.status200(res, user);
      }
    } catch (e) {
      rc.status500(res);
    }
  }

  public async createUser(
    req: IncomingMessage,
    res: ServerResponse,
    _urlData: string | null
  ): Promise<void> {
    const reqData = await getReqData(req);

    if (reqData === null) {
      rc.status400(res, "Request Data Does Not Exist");

      return;
    }

    const user = UserModel.create({ ...reqData });

    if (user === null) {
      rc.status400(res, "Body Does Not Contain Required Fields");

      return;
    }

    try {
      const data = await db.post(TableName.USERS, user);

      rc.status201(res, data);
    } catch {
      rc.status500(res);
    }
  }

  public async updateUser(
    req: IncomingMessage,
    res: ServerResponse,
    urlData: string | null
  ): Promise<void> {
    const id: number = Number(urlData);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      rc.status400(res, "Incorrect UserId");

      return;
    }

    const reqData = await getReqData(req);

    if (reqData === null) {
      rc.status400(res, "Request Data Does Not Exist");

      return;
    }

    const user = UserModel.create({ ...reqData });

    if (user === null) {
      rc.status400(res, "Body Does Not Contain Required Fields");

      return;
    }

    try {
      const updatedData = await db.put(TableName.USERS, id, user);

      if (updatedData === null) {
        rc.status404(res, "User Does Not Exist");
      } else {
        rc.status200(res, updatedData);
      }
    } catch {
      rc.status500(res);
    }
  }

  public async deleteUser(
    _req: IncomingMessage,
    res: ServerResponse,
    urlData: string | null
  ): Promise<void> {
    const id: number = Number(urlData);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      rc.status400(res, "Incorrect UserId");

      return;
    }

    try {
      const isRemoved = await db.delete(TableName.USERS, id);

      if (isRemoved) {
        rc.status204(res);
      } else {
        rc.status404(res, "User Is Not Found");
      }
    } catch (e) {
      rc.status500(res);
    }
  }
}

export default UsersController;
