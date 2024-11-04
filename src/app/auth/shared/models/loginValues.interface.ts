export type TAuthValues = Readonly<{
  email: string;
  password: string;
}>;

export type TTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

