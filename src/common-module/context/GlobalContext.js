import { createContext, useState } from "react"

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [studentDataGlobalContext, setStudentDataGlobalContext] = useState([])
    return(
        <GlobalContext.Provider value={{ 
            studentDataGlobalContext,
            setStudentDataGlobalContext
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider }