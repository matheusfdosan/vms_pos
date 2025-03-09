import jsPDF from "jspdf"
import BrazilReal from "./monetaryFormat"

const generatePDF = (client, purchases) => {
  const doc = new jsPDF()
  console.log(client, purchases)

  doc.text("Lista de Produtos", 10, 10)
  purchases.forEach((purchase, index) => {
    const y = 20 + index * 10
    doc.text(`${index} - ${purchase.name} - R$${purchase.price}`, 10, y)
  })

  let total = 0
  purchases.map((p) => {
    total += Number(p.price)
  })

  doc.text(`Cliente: ${client.name}`, 10, 20 + purchases.length * 10 + 10)
  doc.text(
    `Total: ${BrazilReal.format(total)}`,
    10,
    30 + purchases.length * 10 + 10
  )

  const date = new Date()
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`

  const fileName = `nota_fiscal_${client.name}_${formattedDate}.pdf`

  doc.save(fileName)
}

export default generatePDF
