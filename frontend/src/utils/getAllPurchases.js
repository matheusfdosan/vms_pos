import axios from "axios"

export default async function getAllPurchases() {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL;
    const purchases = await axios({
      method: "GET",
      url: `${apiUrl}purchase/all`,
    })
    return purchases.data.body
  } catch (err) {
    console.error("Error to get all purchases" + err)
    return null
  }
}

