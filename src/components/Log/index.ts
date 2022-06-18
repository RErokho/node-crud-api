import { Color } from "./types";

class Log {
  private static logInstance: Log | null = null;

  private constructor() {}

  public static getLog() {
    if (this.logInstance === null) {
      this.logInstance = new Log();
    }

    return this.logInstance;
  }

  private write(
    color: Color,
    msg: string,
    newLine: number = 1,
    space: number = 0
  ) {
    const { stdout } = process;

    stdout.write(
      `${" ".repeat(space)}${color}${msg}${color}${"\n".repeat(newLine)}`
    );
  }

  public message(msg: string, newLine: number = 1, space: number = 0) {
    this.write(Color.BLUE, msg, newLine, space);
  }

  public warning(msg: string, newLine: number = 1, space: number = 0) {
    this.write(Color.YELLOW, msg, newLine, space);
  }

  public error(msg: string, newLine: number = 1, space: number = 0) {
    this.write(Color.RED, msg, newLine, space);
  }

  public success(msg: string, newLine: number = 1, space: number = 0) {
    this.write(Color.GREEN, msg, newLine, space);
  }

  public text(msg: string, newLine: number = 1, space: number = 0) {
    this.write(Color.CYAN, msg, newLine, space);
  }

  clear() {
    console.clear();
  }
}

export default Log;
