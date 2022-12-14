import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import useInput from "../../../common-module/hooks/useInput"
import { GlobalContext } from "../../../common-module/context/GlobalContext"
import { LocalContext } from "../context/LocalContext"
import InputAndLabel from "../../../common-module/component/InputAndLabel"
import { submitNewStudentForm } from "../controller/Controller"
import Button from "react-bootstrap/Button"

const Add = () => {
    const { 
        studentDataGlobalContext, 
        setStudentDataGlobalContext
    } = useContext(GlobalContext)
    const { localContext, setLocalContext } = useContext(LocalContext)
    const navigate = useNavigate()
    const inputs = useInput()
    const changeInput = (event, input) => {
        inputs(event, input, localContext, setLocalContext)
    }
    const getState = {
        navigate,
        localContext,
        setLocalContext,
        studentDataGlobalContext,
        setStudentDataGlobalContext
    }
    
    return(
        <>
            <form className="mt-4" onSubmit={ (event) => { submitNewStudentForm(event, getState) } }>
                <InputAndLabel
                    label="ID :"
                    onChange={ (event) => { changeInput(event, "id") } }
                    placeholder="Input student's ID here ..."
                    type="number"
                    value={ localContext.id }
                />
                <InputAndLabel
                    label="Name :"
                    onChange={ (event) => { changeInput(event, "name") } }
                    placeholder="Input student's name here ..."
                    type="text"
                    value={ localContext.name }
                />
                <InputAndLabel
                    label="Field of Study :"
                    onChange={ (event) => { changeInput(event, "fieldOfStudy") } }
                    placeholder="Input student's field of study here ..."
                    type="text"
                    value={ localContext.fieldOfStudy }
                />
                <InputAndLabel
                    label="Entry Year :"
                    onChange={ (event) => { changeInput(event, "entryYear") } }
                    placeholder="Input student's entry year here ..."
                    type="number"
                    value={ localContext.entryYear }
                />
                <InputAndLabel
                    label="Graduation Year :"
                    onChange={ (event) => { changeInput(event, "graduationYear") } }
                    placeholder="Input student's graduation year here ..."
                    type="number"
                    value={ localContext.graduationYear }
                />
                <Button className="mt-4 mb-2 p-2" variant="success" type="submit">Submit</Button>
                <Button className="p-2" variant="danger" onClick={ () => { navigate("/student") } }>Back</Button>
            </form>
        </>
    )
}

export default Add