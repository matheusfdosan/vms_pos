import axios from "axios"

export default async function registerClient(form) {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL
    console.log(form);
    const response = await axios({
      method: "POST",
      url: `${apiUrl}client/add`,
      data: {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
      },
    })
    // return productRaw.data.body[0]
    console.log(response)
  } catch (err) {
    console.error("Error to register client" + err)
    return null
  }
}
