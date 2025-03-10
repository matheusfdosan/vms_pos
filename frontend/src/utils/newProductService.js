import axios from "axios"

export default async function newProductService(product) {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL
    await axios({
      method: "POST",
      url: `${apiUrl}product/add`,
      data: {
        name: product.name,
        id: product.id,
        price: parseFloat(product.price),
        img: product.img,
        stock: 0,
      },
    })
  } catch (err) {
    console.error("Error to create new product" + err)
  }
}
