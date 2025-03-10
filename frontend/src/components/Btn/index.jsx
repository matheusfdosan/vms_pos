import "./style.css"

function Btn(props) {
  return (
    <button className="btn" onClick={props.f} id="Fpurchase_btn">
      {props.name}
    </button>
  )
}

export default Btn
