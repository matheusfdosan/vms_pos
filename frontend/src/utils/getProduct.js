import axios from "axios"

export default async function getProduct(code) {
  try {
    const productRaw = await axios.get("teste" + code)
    console.log(productRaw.data)
  } catch (err) {
    console.log(err)
  }
}
