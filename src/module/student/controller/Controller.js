const submitNewStudentForm = (event, viewState) => {
    const { 
        navigate,
        localContext,
        setLocalContext,
        studentDataGlobalContext, 
        setStudentDataGlobalContext 
    } = viewState
    event.preventDefault()
    if(localContext) {
        const filterStudentById = studentDataGlobalContext.filter(({ id }) => {
            return id === localContext.id
        })
        if(filterStudentById.length > 0) {
            alert("ID already exists, Please use another ID!")
        }
        else {
            setStudentDataGlobalContext([...studentDataGlobalContext, localContext])
            setLocalContext({
                id: "",
                name: "",
                fieldOfStudy: "",
                entryYear: "",
                graduationYear: ""
            })
            navigate("/student")
        }
    }
    else {
        alert("Something wrong with the input!")
    }
}
const getStudentDataById = (viewState) => {
    const { navigate, studentIdLocalContext, studentDataGlobalContext } = viewState
    const isIdValid = studentDataGlobalContext.some(({ id }) => { return parseInt(id) === parseInt(studentIdLocalContext) })
    if(!isIdValid) { 
        alert("Context ID is not valid!")
        navigate("/student")
    }
    else {
        const filterStudentById = studentDataGlobalContext.filter(({ id }) => {
            return id === studentIdLocalContext
        })
        return filterStudentById[0]
    }
}
const updateStudentDataById = (event, viewState) => {
    const { navigate, localContext, setLocalContext, studentDataGlobalContext } = viewState
    event.preventDefault()
    const studentDataIndexById = studentDataGlobalContext.findIndex((data) => { 
        return parseInt(data.id) === parseInt(localContext.id) 
    })
    studentDataGlobalContext[studentDataIndexById] = localContext
    setLocalContext({
        id: "",
        name: "",
        fieldOfStudy: "",
        entryYear: "",
        graduationYear: ""  
    })
    navigate("/student")
}

const removeStudentDataById = (studentId, studentDataGlobalContext, setStudentDataGlobalContext) => {
    const getAllDataExceptTheRemovedOne = studentDataGlobalContext.filter((data) => {
        return parseInt(data.id) !== parseInt(studentId)
    })
    setStudentDataGlobalContext(getAllDataExceptTheRemovedOne)
}

export { submitNewStudentForm, getStudentDataById, updateStudentDataById, removeStudentDataById }