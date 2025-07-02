import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
// src/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
config({ path: ".env" });

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql, { schema });
