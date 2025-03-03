import { sql } from "../configs/database.js"

// sql`DROP TABLE IF EXISTS purchase;`.then(() => {
//   console.log("Existing table was dropped!")
//   process.exit()
// })

sql`
  CREATE TABLE purchase (
    id            SERIAL PRIMARY KEY,
    items         JSONB NOT NULL,
    total         DECIMAL(10, 2) NOT NULL,
    client_CPF    TEXT NOT NULL,  
    FOREIGN KEY (client_CPF) REFERENCES client (cpf)
  );
`.then(() => {
  console.log("Table purchase was created!")
  process.exit()
})
