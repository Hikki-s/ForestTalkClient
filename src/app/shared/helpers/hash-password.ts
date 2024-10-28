import * as bcrypt from "bcryptjs";

export const hashPassword = (password: string): string =>
  bcrypt.hashSync(password, 10);
