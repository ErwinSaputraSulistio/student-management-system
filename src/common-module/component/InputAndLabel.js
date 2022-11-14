const InputAndLabel = ({ label, onChange, placeholder, type, value }) => {
    return(
        <>
            <label>{ label }</label>
            <input onChange={ onChange } placeholder={ placeholder } required type={ type } value={ value }></input>
        </>
    )
}

export default InputAndLabel