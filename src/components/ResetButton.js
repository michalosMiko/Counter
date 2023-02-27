import "./ResetButton.css"

const ResetButton = (props) => {
    return (
        <button className="btn" onClick={props.reset}>Smazati</button>
    )
}

export default ResetButton