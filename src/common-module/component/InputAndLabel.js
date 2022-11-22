const InputAndLabel = ({ label, onChange, placeholder, type, value }) => {
    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">{ label }</span>
            </div>
            <input
                className="form-control" 
                id="basic-url" 
                onChange={ onChange }
                placeholder={ placeholder }
                required
                type={ type }
                value={ value }
            />
        </div>
    )
}

export default InputAndLabel