import { sql } from "../configs/database.js"

// sql`DROP TABLE IF EXISTS client;`.then(() => {
//   console.log("Existing table was dropped!")
//   process.exit()
// })

sql`
  CREATE TABLE client (
    name        TEXT,
    email       TEXT,
    cpf         VARCHAR(11) PRIMARY KEY CHECK (cpf ~ '^[0-9]{11}$') 
  );
`.then(() => {
  console.log("Table client was created!")
  process.exit()
})
  