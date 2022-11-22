import { createContext, useState } from "react"

const LocalContext = createContext()

const LocalContextProvider = ({ children }) => {
    const [localContext, setLocalContext] = useState({ 
        id: "",
        name: "",
        fieldOfStudy: "",
        entryYear: "",
        graduationYear: ""  
    })
    const [studentIdLocalContext, setStudentIdLocalContext] = useState(null)
    const [multipleRowsSelected, setMultipleRowsSelected] = useState([])
    const [isRemovingMultipleRows, setIsRemovingMultipleRows] = useState(false)

    return(
        <LocalContext.Provider value={{ 
            localContext, 
            setLocalContext,
            studentIdLocalContext,
            setStudentIdLocalContext,
            multipleRowsSelected,
            setMultipleRowsSelected,
            isRemovingMultipleRows,
            setIsRemovingMultipleRows,
        }}>
            { children }
        </LocalContext.Provider>
    )
}

export default LocalContextProvider
export { LocalContext }