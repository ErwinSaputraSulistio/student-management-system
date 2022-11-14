import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useInput from "../../../common-module/hooks/useInput"
import { GlobalContext } from "../../../common-module/context/GlobalContext"
import { LocalContext } from "../context/LocalContext"
import InputAndLabel from "../../../common-module/component/InputAndLabel"
import { getStudentDataById, updateStudentDataById } from "../controller/Controller"

const Edit = () => {
    const { studentDataGlobalContext } = useContext(GlobalContext)
    const { localContext, setLocalContext, studentIdLocalContext } = useContext(LocalContext)
    const navigate = useNavigate()
    const getState = {
        navigate,
        localContext, 
        setLocalContext,
        studentIdLocalContext,
        studentDataGlobalContext
    }
    const filteredStudentDataById = getStudentDataById(getState)
    const inputs = useInput()
    const changeInput = (event, input) => {
        inputs(event, input, localContext, setLocalContext)
    }
    useEffect(() => {
        setLocalContext(filteredStudentDataById)
        // eslint-disable-next-line
    }, [])
    return(
        <>
            <button onClick={ 
                () => { navigate("/") } 
            }>Back</button>
            <form onSubmit={ (event) => { updateStudentDataById(event, getState) } }>
                <InputAndLabel
                    onChange={ (event) => { changeInput(event, "name") } }
                    label="Name :"
                    placeholder="Edit this student's name ..."
                    type="text"
                    value={ localContext.name }
                />
                <InputAndLabel
                    onChange={ (event) => { changeInput(event, "fieldOfStudy") } }
                    label="Field of Study :"
                    placeholder="Edit this student's field of study ..."
                    type="text"
                    value={ localContext.fieldOfStudy }
                />
                <InputAndLabel
                    onChange={ (event) => { changeInput(event, "entryYear") } }
                    label="Entry Year :"
                    placeholder="Edit this student's entry year ..."
                    type="number"
                    value={ localContext.entryYear }
                />
                <InputAndLabel
                    onChange={ (event) => { changeInput(event, "graduationYear") } }
                    label="Graduation Year :"
                    placeholder="Edit this student's graduation year ..."
                    type="number"
                    value={ localContext.graduationYear }
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Edit