import axios from "axios"

export default async function registerPurchase(client, products) {
  try {
    const apiUrl = import.meta.env.VITE_MAIN_URL
    const productsItems = []

    products.map((product) => {
      productsItems.push({ item: product.id })
    })

    const response = await axios({
      method: "POST",
      url: `${apiUrl}purchase/add`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        orders: productsItems,
        cpf: client.cpf,
      },
    })

    console.log(response.data)
  } catch (err) {
    console.error("Error to register purchase" + err)
  }
}
