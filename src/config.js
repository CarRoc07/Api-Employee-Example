import { config } from "dotenv";
config()

export const dbUrl = process.env.DB_URL;
export const port = process.env.PORT;