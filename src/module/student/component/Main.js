import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../common-module/context/GlobalContext"
import { LocalContext } from "../context/LocalContext"
import StudentTable from "./StudentTable"
import { removeStudentDataById, removeCheckedStudentRows } from "../controller/Controller"
import Button from "react-bootstrap/Button"

const Main = () => {
    const { studentDataGlobalContext, setStudentDataGlobalContext } = useContext(GlobalContext)
    const {
        setStudentIdLocalContext,
        isRemovingMultipleRows,
        setIsRemovingMultipleRows,
        multipleRowsSelected,
        setMultipleRowsSelected
    } = useContext(LocalContext)
    const navigate = useNavigate()
    // ON SINGLE ROW CLICK
    const editRow = (id) => {
        setStudentIdLocalContext(id)
        navigate("/student?action=edit")
    }
    const deleteRow = (id) => { removeStudentDataById(id, studentDataGlobalContext, setStudentDataGlobalContext) }
    
    return(
        <>
            {
                isRemovingMultipleRows === false &&
                <div className="d-flex flex-column align-items-center mb-3 w-100">
                        <Button
                            className="mb-3 p-3 w-50" 
                            variant="outline-success" 
                            onClick={ () => { navigate("/student?action=add") } 
                        }>
                            Add New Student
                        </Button>
                    {
                        studentDataGlobalContext.length > 1 &&
                        <Button 
                            className="p-3 w-50" 
                            variant="outline-danger" 
                            onClick={ () => { setIsRemovingMultipleRows(true) } }
                        >
                            Remove Multiple Students
                        </Button>
                    }
                </div>
            }
            {
                isRemovingMultipleRows === true &&
                <div className="d-flex flex-row justify-content-evenly mb-3 w-100">
                    <Button 
                        className="p-3 w-50" 
                        variant="outline-success"
                        onClick={ () => { 
                            removeCheckedStudentRows(
                                multipleRowsSelected, 
                                studentDataGlobalContext, 
                                setStudentDataGlobalContext,
                                setIsRemovingMultipleRows,
                                setMultipleRowsSelected
                            ) 
                        } }
                    >
                        Remove Selected
                    </Button>
                    <Button
                        className="p-3 w-25"
                        variant="outline-danger"
                        onClick={ () => { setIsRemovingMultipleRows(false) } }
                    >
                        Cancel
                    </Button>
                </div>
            }
            {
                studentDataGlobalContext.length > 0 ?
                <StudentTable
                    data={ studentDataGlobalContext }
                    onSingleRowClick={{ editRow, deleteRow }}
                />
                :
                null
            }
        </>
    )
}

export default Main