import axios from "axios"

export default async function updateProduct(product) {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL
    await axios({
      method: "PUT",
      url: `${apiUrl}product/${product.oldCode}`,
      data: {
        name: product.name,
        newId: product.id,
        price: parseFloat(product.price),
        img: product.img,
        stock: 0,
      },
    })
  } catch (err) {
    console.error("Error to update product" + err)
  }
}
