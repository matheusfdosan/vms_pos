import { useState } from "react"
import "./style.css"
import registerClient from "../../utils/registerClient.js"
import registerPurchase from "../../utils/registerPurchase.js"
import Loading from "../Loading"

function Form(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cpf: "",
  })
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChangeInput = ({ target }) => {
    const { name, value } = target

    if (name === "cpf") {
      const cpfRegex = /^\d{0,11}$/
      if (!cpfRegex.test(value)) {
        return
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSendClientData = async () => {
    setLoading(true)
    const { name, email, cpf } = form
    if (name.length === 0 || email.length === 0 || cpf.length !== 11) {
      setMessage("Preencha todos os campos corretamente!")
      setLoading(false)
    } else {
      try {
        await registerClient(form)
        await registerPurchase(form, props.allProducts)
        props.clientInfo(form)
        props.func()
        setLoading(false)
      } catch (err) {
        console.log("Error here: " + err)
        setLoading(false)
      }
    }
  }

  return (
    <div className="Form">
      <h2 className="title">
        Mas antes do pagamento, por favor, digite seus dados
      </h2>

      <div id="all-inputs">
        <p>{props.name1}</p>
        <input
          type="text"
          name="name"
          onChange={handleChangeInput}
          value={form.name}
          placeholder="John Doe"
          required
        />

        <p>{props.name2}</p>
        <input
          type="email"
          name="email"
          onChange={handleChangeInput}
          value={form.email}
          placeholder="johndoe@email.com"
          required
        />

        <p>{props.name3}</p>
        <input
          type="text"
          name="cpf"
          onChange={handleChangeInput}
          value={form.cpf}
          placeholder="12345678910"
          minLength={11}
          required
        />
        <span id="msg">{message}</span>
      </div>
      <div className="form_btns">
        <button onClick={handleSendClientData}>{props.name4}</button>
        <button onClick={props.func2}>Fechar</button>
      </div>
      
      {loading && <Loading />}
    </div>
  )
}

export default Form
