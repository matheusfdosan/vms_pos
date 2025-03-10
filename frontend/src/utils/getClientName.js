import axios from "axios"

export default async function getClientName(cpf) {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL;
    const client = await axios({
      method: "GET",
      url: `${apiUrl}client/${cpf}`,
    })
    return client.data.body
  } catch (err) {
    console.error("Error to get client data" + err)
    return null
  }
}

