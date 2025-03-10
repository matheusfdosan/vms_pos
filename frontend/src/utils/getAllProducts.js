import axios from "axios"

export default async function getAllProduct() {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL;
    const productRaw = await axios({
      method: "GET",
      url: `${apiUrl}product/all`,
    })
    return productRaw.data.body
  } catch (err) {
    console.error("Error to get all product" + err)
    return null
  }
}

