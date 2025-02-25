import postgres from "postgres";
import { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } from "../../envVariables.js"

const URL = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`

export const sql = postgres(URL)