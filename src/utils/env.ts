import dotenv from "dotenv";

dotenv.config();

// env.ts
export const DATABASE_URL: string = process.env.DATABASE_URL || "";
export const SECRET: string = process.env.SECRET || "";