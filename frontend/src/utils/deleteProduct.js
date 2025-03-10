import axios from "axios"

export default async function deleteProduct(id) {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL
    await axios({
      method: "DELETE",
      url: `${apiUrl}product/${id}`,
    })
  } catch (err) {
    console.error("Error to delete a product" + err)
  }
}
