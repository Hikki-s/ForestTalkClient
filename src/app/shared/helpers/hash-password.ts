import { sha256 } from "js-sha256";

export const hashPassword = (password: string): string => {
  return sha256(password);
};
