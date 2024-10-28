import { TuiDay } from "@taiga-ui/cdk";

export const convertDateToISO = (date: TuiDay): string =>
  new Date(date.year, date.month - 1, date.day).toISOString();
