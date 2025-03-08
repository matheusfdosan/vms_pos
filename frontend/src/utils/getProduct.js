export default async function getProduct(code) {
  try {
    const response = await fetch(`${code}`);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const productData = await response.json();
    console.log("Dados do produto:", productData);
    return productData;
  } catch (err) {
    console.error("Erro ao buscar produto:", err);
    return null; // Ou outra estratégia de fallback
  }
}