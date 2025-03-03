import "./style.css"

function Form(props) {
  return (
    <div className="Form">
      <h2 className="title">
        Mas antes do pagamento, por favor, digite seus dados
      </h2>

      <p>{props.name1}</p>
      <input type="text" name="nameI" />

      <p>{props.name2}</p>
      <input type="text" name="emailI" />

      <p>{props.name3}</p>
      <label htmlFor="cpfI"></label>
      <input type="text" />
      <div className="form_btns">
        <button onClick={props.func}>{props.name4}</button>
        <button onClick={props.func2}>Fechar</button>
      </div>
    </div>
  )
}

export default Form
