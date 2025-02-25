import { config } from "dotenv"

config({ path: "./src/configs/.env" })

export const PORT = process.env.PORT
export const PGHOST = process.env.PGHOST
export const PGDATABASE = process.env.PGDATABASE
export const PGUSER = process.env.PGUSER
export const PGPASSWORD = process.env.PGPASSWORD
