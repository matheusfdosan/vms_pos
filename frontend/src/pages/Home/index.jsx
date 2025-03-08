import { useEffect, useState } from "react"
import "./style.css"

//Imagens
import marketIcon from "../../assets/market_icon.png"
import flip_icon from "../../assets/flip_icon.png"

//Componentes
import P_card from "../../components/P_card"
import Btn from "../../components/Btn"
import Form from "../../components/Form"
import Payment_imgs from "../../components/Payment_imgs"
import Payment_Pix from "../../components/Payment_Pix"
import Payment_Money from "../../components/Payment_Money"
import Payment_Credit from "../../components/Payment_Credit"
import getProduct from "../../utils/getProduct"

function Home() {
  const [isOpen, setisOpen] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("debit")
  const [showForm, setShowForm] = useState(false)
  const [productCode, setProductCode] = useState("")
  const [message, setMessage] = useState("")
  const [products, setProducts] = useState([])

  const handleAddProduct = async () => {
    if (productCode.length == 0 || productCode.length < 5) {
      setMessage("O código deve conter 5 dígitos")
    } else {
      setMessage("")
      const productRaw = await getProduct(productCode)

      if (productRaw === undefined) {
        setMessage("Digite um código válido!")
      } else {
        setProducts((prev) => [...prev, productRaw])
      }
    }
  }

  const handleFinalizePurchase = () => {
    setisOpen(true)
  }

  const handleRemoveProduct = () => {
    if (productCode.length == 0 || productCode.length < 5) {
      setMessage("O código deve conter 5 dígitos")
    } else {
      setMessage("")
      if (!products.find((product) => product.id === productCode)) {
        setMessage("Digite um código válido!")
      } else {
        const getIndex = products.map((product, index) => {
          if (product.id === productCode) {
            return index
          }
        })
        const updatedProducts = products.filter((_, index) => index !== getIndex[0]);
        setProducts(updatedProducts);
      }
    }
  }

  return (
    <>
      <header>
        <div className="header-container">
          <img src={marketIcon} alt="" />
          <h2>Caixa - 01</h2>
        </div>
      </header>

      <a href="/dashboard" className="flip_button">
        <img src={flip_icon} alt="" />
      </a>

      <main>
        <div className="main-container">
          <div className="Purchase_c">
            <div className="codeInput">
              <p>Codigo do Produto:</p>
              <input
                type="number"
                placeholder="12345"
                value={productCode}
                onChange={({ target }) => {
                  if (/^\d{0,5}$/.test(target.value))
                    setProductCode(target.value)
                }}
              />
              <span id="msg">{message}</span>
            </div>

            <div className="btns">
              <button className="add_btn" onClick={handleAddProduct}>
                Adicionar
              </button>
              <button className="add_btn" onClick={handleRemoveProduct}>
                Remover
              </button>
            </div>
            <Btn name={"Finalizar Compra"} f={handleFinalizePurchase} />
          </div>
          <P_card
            productsInfo={products}
            cardsHeight="400px"
            noAmount={false}
          />
        </div>
      </main>

      {isOpen && (
        <div className="Purchase_modal" id="Purchase_modal">
          <div className="modal-container">
            <div className="Purchase">
              <h2>Formas de Pagamento</h2>
              <ul className="Payment_methods">
                <li>
                  <button
                    disabled={isPaid}
                    className="method_btn"
                    onClick={() => setPaymentMethod("debit")}
                    style={{
                      borderBottom: `.5px solid ${
                        paymentMethod === "debit" ? "#1e1e1e" : "transparent"
                      }`,
                    }}
                  >
                    Débito
                  </button>
                </li>
                <li>
                  <button
                    disabled={isPaid}
                    className="method_btn"
                    onClick={() => setPaymentMethod("credit")}
                    style={{
                      borderBottom: `.5px solid ${
                        paymentMethod === "credit" ? "#1e1e1e" : "transparent"
                      }`,
                    }}
                  >
                    Crédito
                  </button>
                </li>
                <li>
                  <button
                    disabled={isPaid}
                    className="method_btn"
                    onClick={() => setPaymentMethod("pix")}
                    style={{
                      borderBottom: `.5px solid ${
                        paymentMethod === "pix" ? "#1e1e1e" : "transparent"
                      }`,
                    }}
                  >
                    Pix
                  </button>
                </li>
                <li>
                  <button
                    disabled={isPaid}
                    className="method_btn"
                    onClick={() => setPaymentMethod("money")}
                    style={{
                      borderBottom: `.5px solid ${
                        paymentMethod === "money" ? "#1e1e1e" : "transparent"
                      }`,
                    }}
                  >
                    Dinheiro
                  </button>
                </li>
              </ul>
              {paymentMethod == "debit" ? (
                <Payment_imgs paid={isPaid} />
              ) : paymentMethod == "credit" ? (
                <Payment_Credit paid={isPaid} />
              ) : paymentMethod == "money" ? (
                <Payment_Money paid={isPaid} />
              ) : (
                <Payment_Pix paid={isPaid} />
              )}

              <div id="btns-cancel-end">
                <Btn name={"Finalizar Compra"} f={() => setShowForm(true)} />

                <Btn
                  name={"Cancelar Compra"}
                  f={() => {
                    setisOpen(false)
                    setShowForm(false)
                    setIsPaid(false)
                  }}
                />
              </div>

              {showForm && (
                <Form
                  name1="Nome"
                  name2="Email"
                  name3="CPF"
                  name4="Enviar"
                  func={() => {
                    setIsPaid(true)
                    setShowForm(false)
                  }}
                  func2={() => setShowForm(false)}
                />
              )}
            </div>
            <P_card
              cardsHeight="100%"
              productsInfo={products}
              noAmount={false}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Home
