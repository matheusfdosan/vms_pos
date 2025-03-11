import deleteUserControler from "../../controllers/deleteUserControler.js"

export default async (server) => {
  server.delete("/client/:id", deleteUserControler)
}