import { debug } from "debug";
import { LogLevel } from "@shared/constants/enums";

const formatter = (msg: string | Record<string, any>, level: string) => {
  if (typeof msg === "string") {
    return { message: msg, logLever: level };
  }
  if (typeof msg === "object") {
    return { ...msg, logLever: level };
  }
  return msg;
};

function makeService(service: string) {
  const d = debug(`${service}:debug`);
  // eslint-disable-next-line no-console
  d.log = console.log.bind(console);

  const i = debug(`${service}:info`);
  // eslint-disable-next-line no-console
  i.log = console.log.bind(console);

  const w = debug(`${service}:warn`);
  // eslint-disable-next-line no-console
  w.log = console.log.bind(console);

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
