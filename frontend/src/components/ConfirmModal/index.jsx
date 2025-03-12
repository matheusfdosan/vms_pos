import "styles.css"

function ConfirmModal({message, option}) {

    const handleClickYes = () => {
        option(true)
    }

    const handleClickNo = () => {
        option(false)
    }


    return <div className="confirm-modal">
        <h2>{message}</h2>

        <div className="options-btns">
            <button onClick={handleClickYes}>Continuar</button>
            <button onClick={handleClickNo}>Cancelar</button>
        </div>
    </div>
}

export default ConfirmModal