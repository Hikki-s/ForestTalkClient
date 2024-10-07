import { debug } from "debug";

enum LogLevel {
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

const formatter = (msg: string | object, level: LogLevel) => {
  const message = typeof msg === "string" ? msg : JSON.stringify(msg, null, 2);
  return { message, logLevel: level };
};

function makeService(service: string) {
  const d = debug(`${service}:debug`);
  const i = debug(`${service}:info`);
  const w = debug(`${service}:warn`);
  const e = debug(`${service}:error`);

  return {
    debug: (msg: any) => d("%j", formatter(msg, LogLevel.DEBUG)),
    info: (msg: any) => i("%j", formatter(msg, LogLevel.INFO)),
    warn: (msg: any) => w("%j", formatter(msg, LogLevel.WARN)),
    error: (msg: any) => e("%j", formatter(msg, LogLevel.ERROR)),
  };
}

export const Logger = {
  client: makeService("client"),
  api: makeService("api"),
};
