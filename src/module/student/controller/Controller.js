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

const checkRowsToBeRemoved = (event, multipleRowsSelected, setMultipleRowsSelected) => {
    const idValue = event.target.value
    const isIdAlreadyExists = multipleRowsSelected.includes(idValue)
    if(!isIdAlreadyExists) {
        setMultipleRowsSelected([...multipleRowsSelected, idValue])
    }
    else {
        const removeIdFromArray = multipleRowsSelected.filter((id) => { return parseInt(id) !== parseInt(idValue) })
        setMultipleRowsSelected(removeIdFromArray)
    }
}

const removeCheckedStudentRows = (
    multipleRowsSelected, studentDataGlobalContext, setStudentDataGlobalContext,
    setIsRemovingMultipleRows, setMultipleRowsSelected
) => {
    if(multipleRowsSelected.length > 0) {
        const uncheckedStudentData = studentDataGlobalContext.filter((data) => !multipleRowsSelected.includes(data.id))
        // const uncheckAllCheckboxes = () => {
        //     let inputs = document.getElementsByTagName('input')
        //     for (let i = 0; i < inputs.length; i++)  {
        //         if (inputs[i].type === 'checkbox')   {
        //             inputs[i].checked = false
        //         }
        //     }
        // }
        setStudentDataGlobalContext(uncheckedStudentData)
        setMultipleRowsSelected([])
        setIsRemovingMultipleRows(false)
        // uncheckAllCheckboxes()
    }
    else { alert("Failed to remove, please select at least one students to process further!") }
}

export { 
    submitNewStudentForm, getStudentDataById, updateStudentDataById, 
    removeStudentDataById, checkRowsToBeRemoved, removeCheckedStudentRows
}