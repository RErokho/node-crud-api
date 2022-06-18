import data from "./data";

import { TableName, TGetTable, TTableValue } from "./types";

export const getTable: TGetTable = <T extends TableName>(tableName: T) => {
  let table = data[tableName];

  if (table === undefined) {
    table = {};
    data[tableName] = table;
  }

  return table as TTableValue<T>;
};
