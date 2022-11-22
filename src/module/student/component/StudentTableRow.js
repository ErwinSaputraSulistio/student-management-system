import { useContext } from "react"
import { LocalContext } from "../context/LocalContext"
import Button from "react-bootstrap/Button"
import { checkRowsToBeRemoved } from "../controller/Controller"

export default function TableRow({ studentDataValues, onSingleRowClick }) {
    const { isRemovingMultipleRows, multipleRowsSelected, setMultipleRowsSelected } = useContext(LocalContext)
    const { id, name, fieldOfStudy, entryYear, graduationYear } = studentDataValues
    const { editRow, deleteRow } = onSingleRowClick

    return(
        <tr className="d-flex flex-row">
            <td className="col-2 text-truncate p-3">{ id }</td>
            <td className="col-2 text-truncate p-3">{ name }</td>
            <td className="col-2 text-truncate p-3">{ fieldOfStudy }</td>
            <td className="col-2 text-truncate p-3">{ entryYear }</td>
            <td className="col-2 text-truncate p-3">{ graduationYear }</td>
            <td className="col-2 d-flex flex-column align-items-center justify-content-center">
                { !isRemovingMultipleRows &&
                    <>
                        <Button className="mt-1 mb-1 w-75" variant="outline-success" size="md" onClick={ 
                            () => { editRow(id) }
                        }>Edit</Button>
                        <Button className="mt-1 mb-1 w-75" variant="outline-danger" onClick={ 
                            () => { deleteRow(id) }
                        }>Delete</Button>
                    </>
                }
                {
                    isRemovingMultipleRows &&
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value={ id } 
                            id="studentRemovalCheckbox"
                            onChange={ (event) => { checkRowsToBeRemoved(event, multipleRowsSelected, setMultipleRowsSelected) } }
                            checked={ multipleRowsSelected.includes(id) ? true : false }
                        />
                    </div>
                }
            </td>
        </tr>
    )
}