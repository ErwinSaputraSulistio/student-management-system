import { useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../common-module/context/GlobalContext"
import TableRow from "./ListRow"

const List = () => {
    const { studentDataGlobalContext } = useContext(GlobalContext)
    const navigate = useNavigate()
    const studentsRow = useMemo(() => { 
        return studentDataGlobalContext.map((data, index) => {
            return( <TableRow studentData={ data } key={ index }/> )
        }) 
    // eslint-disable-next-line
    }, [studentDataGlobalContext])
    return(
        <>
            <button onClick={ 
                () => { navigate("/student?action=add") } 
            }>Add New Student</button>
            {
                studentDataGlobalContext.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Field of Study</th>
                            <th>Entry Year</th>
                            <th>Graduation Year</th>
                            <th>Settings</th>
                        </tr>
                    </thead>
                    {
                        studentsRow
                    }
                </table>
                : 
                null
            }
        </>
    )
}

export default List