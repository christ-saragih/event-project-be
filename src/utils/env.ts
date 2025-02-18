import dotenv from "dotenv";

dotenv.config();

// env.ts
export const DATABASE_URL: string = process.env.DATABASE_URL || "";
export const SECRET: string = process.env.SECRET || "";

// mongodb+srv://csbennefit:HrqcHS8k55XENJa6@cluster-event-project.c3sog.mongodb.net/db_event?retryWrites=true&w=majority
