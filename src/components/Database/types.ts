import UserModel from "../../models/UserModel";

/*
  Tables
 */

export enum TableName {
  USERS = "USERS",
}

export type TDataGeneric<K extends TableName, V = TTableValue<K>> = {
  [key in K]?: V;
};

export type TTableValue<T extends TableName> = T extends TableName.USERS
  ? TUsersTable
  : never;

export type TTableOneValue<T extends TableName> = T extends TableName.USERS
  ? TUserData
  : never;

export type TTableValueAsArray<T extends TableName> = T extends TableName.USERS
  ? Array<TUserData>
  : never;

export type TData = TDataGeneric<TableName>;

export type TTableData = TUserData;

export type TTable<T extends TTableData> = { [key: number]: T };

export type TUsersTable = TTable<TUserData>;

/*
  USERS table
 */

export type TUserData = {
  id: string;
  username: string;
  age: number;
  hobbies: Array<string>;
};

/*
  POST data types
 */

export type TPostData<T extends TableName> = T extends TableName.USERS
  ? UserModel
  : never;

/*
  PUT data types
 */

export type TPutData<T extends TableName> = T extends TableName.USERS
  ? UserModel
  : never;

/*
  Utils
 */

export type TGetTable = <T extends TableName>(tableName: T) => TTableValue<T>;
