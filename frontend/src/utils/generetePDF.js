import jsPDF from "jspdf"
import BrazilReal from "./monetaryFormat"

const pdfGenerator = (client, purchases) => {
  const doc = new jsPDF()

  doc.text("Lista de Produtos", 10, 10)

  purchases.forEach((purchase, index) => {
    const y = 20 + index * 10
    doc.text(`${index} - ${purchase.item[0]} - R$${purchase.item[1]}`, 10, y)
  })

  let total = 0
  purchases.map((p) => {
    total += Number(p.item[1])
  })

  doc.text(`Cliente: ${client.name}`, 10, 20 + purchases.length * 10 + 10)
  doc.text(
    `Total: ${BrazilReal.format(total)}`,
    10,
    30 + purchases.length * 10 + 10
  )

  const fileName = `nota_fiscal_${client.name}.pdf`

  doc.save(fileName)
}

export default pdfGenerator
