import { sql } from "../configs/database.js"

// sql`DROP TABLE IF EXISTS product;`.then(() => {
//   console.log("Existing table was dropped!")
//   process.exit()
// })

sql`
  CREATE TABLE product (
    id          TEXT PRIMARY KEY,
    img         TEXT,
    name        TEXT,
    price       TEXT,
    stock       INTEGER
  );
`
  .then(() => {
    console.log("Table product was created!")
    process.exit()
  })

