import { sql } from "../configs/database.js"

// sql`DROP TABLE IF EXISTS product;`.then(() => {
//   console.log("Existing table was dropped!")
//   process.exit()
// })

sql`
  CREATE TABLE product (
    id          TEXT PRIMARY KEY,
    img         TEXT NOT NULL,
    name        TEXT NOT NULL,
    price       DECIMAL(10, 2) NOT NULL,
    stock       INTEGER NOT NULL
  );
`
  .then(() => {
    console.log("Table product was created!")
    process.exit()
  })

