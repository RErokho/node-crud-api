import { Color, ILog, TClear, TGetLog, TLog, TWrite } from "./types";

class Log implements ILog {
  private static logInstance: Log | null = null;

  public static getLog: TGetLog = () => {
    if (this.logInstance === null) {
      this.logInstance = new Log();
    }

    return this.logInstance;
  };

  private write: TWrite = (color, msg, newLine = 1, space = 0) => {
    const { stdout } = process;

    stdout.write(
      `${" ".repeat(space)}${color}${msg}${color}${"\n".repeat(newLine)}`,
    );
  };

  public message: TLog = (...args) => this.write(Color.BLUE, ...args);

  public warning: TLog = (...args) => this.write(Color.YELLOW, ...args);

  public error: TLog = (...args) => this.write(Color.RED, ...args);

  public success: TLog = (...args) => this.write(Color.GREEN, ...args);

  public text: TLog = (...args) => this.write(Color.CYAN, ...args);

  public clear: TClear = () => console.clear();
}

export default Log;
