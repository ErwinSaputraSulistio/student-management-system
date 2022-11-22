import { useMemo } from "react"
import Table from "react-bootstrap/Table"
import StudentTableRow from "./StudentTableRow"

const StudentTable = ({ data, onSingleRowClick, onSingleChecked }) => {
    const studentsRow = useMemo(() => { 
        return data.map((values, index) => {
            return( 
                <StudentTableRow 
                    studentDataValues={ values } 
                    key={ index }
                    onSingleRowClick={ onSingleRowClick }
                    onSingleChecked={ onSingleChecked }
                /> 
            )
        }) 
    // eslint-disable-next-line
    }, [data])
    return(
        <Table bordered className="text-center">
            <thead className="bg-dark text-light">
                <tr className="d-flex flex-row">
                    <th className="col-2">Student ID</th>
                    <th className="col-2">Name</th>
                    <th className="col-2">Field of Study</th>
                    <th className="col-2">Entry Year</th>
                    <th className="col-2">Graduation Year</th>
                    <th className="col-2">Settings</th>
                </tr>
            </thead>
            <tbody>
            {
                studentsRow
            }
            </tbody>
        </Table>
    )
}

export default StudentTable