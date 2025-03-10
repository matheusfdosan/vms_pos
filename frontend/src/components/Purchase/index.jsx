import pdfGenerator from "../../utils/generetePDF"
import { useEffect, useState } from "react"
import getClientName from "../../utils/getClientName"
import "./style.css"
import BrazilReal from "../../utils/monetaryFormat"

function Purchase({ data }) {
  const [client, setClient] = useState("")
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const client = await getClientName(data.client_cpf)
        setClient(client[0].name)

        data.items.map((item) => {
          setTotal((prev) => prev + Number(item.item[1]))
        })
      } catch (err) {
        console.log("Error to get Client: " + err)
      }
    }
    fetchClient()
    console.log(data.items)
  }, [data])

  const handleInvoice = () => {
    try {
      console.log({name: client}, data.items);
      pdfGenerator({name: client}, data.items)
    } catch (error) {
      console.error("Error generating invoice PDF:", error)
    }
  }

  return (
    <>
      <div className="PurchaseOther">
        <div className="purchaseContainer">
          <span>
            <strong>
              {client} comprou ${BrazilReal.format(total)} em produtos
            </strong>
          </span>
          <button className="invoice_btn" onClick={handleInvoice}>
            Ver nota Fiscal
          </button>
        </div>
      </div>
    </>
  )
}

export default Purchase
