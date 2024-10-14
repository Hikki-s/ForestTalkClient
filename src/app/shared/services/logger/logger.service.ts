import { Injectable } from "@angular/core";
import { debug } from "debug";
import { LogLevel } from "@shared/constants/enums";

const formatter = (msg: string | Record<string, any>, level: LogLevel) => {
  const message = typeof msg === "string" ? msg : JSON.stringify(msg, null, 2);
  return { message, logLevel: level };
};

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  private readonly d: (...args: any[]) => void;
  private readonly i: (...args: any[]) => void;
  private readonly w: (...args: any[]) => void;
  private readonly e: (...args: any[]) => void;

  constructor(serviceName: string) {
    this.d = debug(`${serviceName}:debug`);
    this.i = debug(`${serviceName}:info`);
    this.w = debug(`${serviceName}:warn`);
    this.e = debug(`${serviceName}:error`);
  }

  debug(msg: any) {
    this.d("%j", formatter(msg, LogLevel.DEBUG));
  }

  info(msg: any) {
    this.i("%j", formatter(msg, LogLevel.INFO));
  }

  warn(msg: any) {
    this.w("%j", formatter(msg, LogLevel.WARN));
  }

  error(msg: any) {
    this.e("%j", formatter(msg, LogLevel.ERROR));
  }

  enableLogging(level: LogLevel) {
    debug.enable(`${level.toLowerCase()}:*`);
  }

  disableLogging() {
    debug.disable();
  }
}
