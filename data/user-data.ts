import dotenv from "dotenv";
dotenv.config();

export const env = {
  BASE_URL: process.env.BASE_URL!,
  USERNAME: process.env.USER_NAME!,
  PASSWORD: process.env.USER_PASSWORD!,
};
