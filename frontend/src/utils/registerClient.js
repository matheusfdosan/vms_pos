import axios from "axios"

export default async function registerClient(form) {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL
    await axios({
      method: "POST",
      url: `${apiUrl}client/add`,
      data: {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
      },
    })
  } catch (err) {
    console.error("Error to register client" + err)
  }
}
