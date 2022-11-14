import { useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../common-module/context/GlobalContext"
import { LocalContext } from "../context/LocalContext"
import { removeStudentDataById } from "../controller/Controller"

export default function TableRow({ studentData }) {
    const {
        studentDataGlobalContext,
        setStudentDataGlobalContext
    } = useContext(GlobalContext)
    const { setStudentIdLocalContext } = useContext(LocalContext)
    const navigate = useNavigate()
    const arrayOfStudentDataValues = Object.values(studentData)
    const studentValues = useMemo(() => {
        return arrayOfStudentDataValues.map((value, index) => {
            return ( <td key={ index }>{ value }</td> )
        })
    }, [arrayOfStudentDataValues])
    return(
        <thead>
            <tr>
                { studentValues }
                <td>
                    <button onClick={ 
                        () => {
                            setStudentIdLocalContext(studentData.id)
                            navigate("/student?action=edit")
                        } 
                    }>Edit</button>
                    <button onClick={ 
                        () => { 
                            removeStudentDataById(
                                studentData.id, 
                                studentDataGlobalContext, 
                                setStudentDataGlobalContext
                            )
                        }
                    }>Delete</button>
                </td>
            </tr>
        </thead>
    )
}