import axios from "axios"

export default async function getProduct(code) {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL;
    const productRaw = await axios({
      method: "GET",
      url: `${apiUrl}product/${code}`,
    })
    return productRaw.data.body[0]
  } catch (err) {
    console.error("Error to get product" + err)
    return null
  }
}

