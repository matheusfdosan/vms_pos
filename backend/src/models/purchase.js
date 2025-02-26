import { sql } from "../configs/database.js"

// sql`DROP TABLE IF EXISTS purchase;`.then(() => {
//   console.log("Existing table was dropped!")
//   process.exit()
// })

sql`
  CREATE TABLE purchase (
    id          SERIAl PRIMARY KEY,
    items       JSONB,
    total       TEXT,
    client_CPF   TEXT,
    FOREIGN KEY (client_CPF) REFERENCES client (cpf)
  );
`.then(() => {
  console.log("Table purchase was created!")
  process.exit()
})
