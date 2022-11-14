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
    return(
        <LocalContext.Provider value={{ 
            localContext, 
            setLocalContext,
            studentIdLocalContext,
            setStudentIdLocalContext
        }}>
            { children }
        </LocalContext.Provider>
    )
}

export default LocalContextProvider
export { LocalContext }