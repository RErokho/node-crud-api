import { getTable } from "./utils";

import {
  TableName,
  TPostData,
  TPutData,
  TTableOneValue,
  TTableValueAsArray,
} from "./types";

class Database {
  private static dbInstance: Database | null = null;

  private constructor() {}

  public static getDB() {
    if (this.dbInstance === null) {
      this.dbInstance = new Database();
    }

    return this.dbInstance;
  }

  async get<T extends TableName>(
    tableName: T,
    id?: number
  ): Promise<TTableValueAsArray<T> | TTableOneValue<T> | null> {
    return new Promise((resolve, reject) => {
      try {
        const table = getTable(tableName);

        if (id === undefined) {
          resolve(Object.values(table) as TTableValueAsArray<T>);

          return;
        }

        const value = table[id];

        if (value === undefined) {
          resolve(null);
        }

        resolve(value as TTableOneValue<T>);
      } catch {
        reject();
      }
    });
  }

  async post<T extends TableName>(
    tableName: T,
    data: TPostData<T>
  ): Promise<TPostData<T>> {
    return new Promise((resolve, reject) => {
      try {
        const table = getTable(tableName);

        const recordCount = Object.keys(table).length;

        table[recordCount + 1] = data;

        resolve(table[recordCount + 1] as TPostData<T>);
      } catch {
        reject();
      }
    });
  }

  async put<T extends TableName>(
    tableName: T,
    id: number,
    data: TPutData<T>
  ): Promise<TPutData<T> | null> {
    return new Promise((resolve, reject) => {
      try {
        const table = getTable(tableName);

        const oldData = table[id];

        if (oldData === undefined) {
          resolve(null);

          return;
        }

        table[id] = data;

        resolve(table[id] as TPutData<T>);
      } catch {
        reject();
      }
    });
  }

  async delete<T extends TableName>(
    tableName: T,
    id: number
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const table = getTable(tableName);

        const data = table[id];

        if (data === undefined) {
          resolve(false);

          return;
        }

        delete table[id];

        resolve(true);
      } catch {
        reject();
      }
    });
  }
}

export default Database;
