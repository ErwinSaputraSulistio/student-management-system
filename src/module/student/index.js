import { useSearchParams } from "react-router-dom"
import DefaultTemplate from "../../common-module/component/DefaultTemplate"
import HocProvider from "./HocProvider"
import Add from "./component/Add"
import Edit from "./component/Edit"
import Main from "./component/Main"

const Student = () => {
    const [searchParams] = useSearchParams()
    const action = searchParams.get("action")
    const title = "Student Management System"
    document.title = title
    return(
        <DefaultTemplate headerTitle={ title }>
            {
                action === "add" ? <Add/>
                :
                action === "edit" ? <Edit/>
                :
                <Main/>
            }
        </DefaultTemplate>
    )
}

export default HocProvider(Student)