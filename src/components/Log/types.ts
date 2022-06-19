import Log from "./index";

export enum Color {
  "BLUE" = "\x1b[34m",
  "RED" = "\x1b[31m",
  "GREEN" = "\x1b[32m",
  "CYAN" = "\x1b[36m",
  "YELLOW" = "\x1b[33m",
}

/*
  Log
 */
export interface ILog {
  message: TLog;
  warning: TLog;
  error: TLog;
  success: TLog;
  text: TLog;
  clear: TClear;
}

/*
  Methods
 */

export type TGetLog = () => Log;

export type TWrite = (
  color: Color,
  msg: string,
  newLine?: number,
  space?: number,
) => void;

export type TLog = (msg: string, newLine?: number, space?: number) => void;

export type TClear = () => void;
