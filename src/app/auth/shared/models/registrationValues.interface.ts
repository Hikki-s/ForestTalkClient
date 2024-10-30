export type TUserRegistrationValues = Readonly<{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  patronymic: string | null;
  birthDate: string;
  // avatar_url,
  bio: string | null;
}>;

export type TRegistrationResponse = Readonly<{
  message: string;
}>;
